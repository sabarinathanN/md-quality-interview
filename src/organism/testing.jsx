import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { countryCodes } from '../utility/country_code';

const CountryCodeList = () => {
  const [userCountryCode, setUserCountryCode] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleSuccess,
        handleError
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setIsLoading(false);
    }
  };

  const handleSuccess = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    try {
      const country = await getCountryFromCoordinates(latitude, longitude);
      const countryCode = getCountryCode(country);
      setUserCountryCode(countryCode);
      setIsLoading(false);
    } catch (error) {
      console.error("Error getting country from coordinates:", error);
      setError("Failed to retrieve country from coordinates.");
      setIsLoading(false);
    }
  };

  const handleError = (error) => {
    console.error("Error getting user location:", error);
    setError("Failed to get user location.");
    setIsLoading(false);
  };

  const getCountryFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
      if (response && response.data && response.data.address && response.data.address.country) {
        return response.data.address.country;
      } else {
        console.error("Failed to retrieve country from coordinates:", response.data);
        throw new Error("Invalid response from reverse geocoding service.");
      }
    } catch (error) {
      console.error("Error retrieving country from coordinates:", error);
      throw error;
    }
  };

  const getCountryCode = (country) => {
    const foundCountry = countryCodes.find(
      (item) => item.country === country
    );
    return foundCountry ? foundCountry.code : null;
  };

  return (
    <div>
      <h2>Your Country Code</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        userCountryCode && <p>Your country code: {userCountryCode}</p>
      )}
    </div>
  );
};

export default CountryCodeList;
