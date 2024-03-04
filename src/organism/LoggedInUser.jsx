import React, { useEffect, useState } from "react";

const LoggedInPage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
   
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    return (
        <div>
            {user ? (
                <>
                    <h1>Welcome, {user.name}!</h1>
                    <p>Email: {user.email}</p>
                </>
            ) : (
                <p>User data not found.</p>
            )}
        </div>
    );
};

export default LoggedInPage;
