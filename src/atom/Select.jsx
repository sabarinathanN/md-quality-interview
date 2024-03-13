import React, { Fragment, useState, useEffect } from "react";
import { FormControl, Typography, MenuItem, Select } from '@mui/material';
import './select.scss';

const SelectInput = (props) => {
    const {
        onChange = () => null,
        value = "",
        options = [],
        label = "",
        name = "",
        className = ""
    } = props;

    const [defaultValue, setDefaultValue] = useState("");

    useEffect(() => {
        setDefaultValue(value); // Set the default value based on the prop value
    }, [value]);

    return (
        <Fragment>
            <FormControl fullWidth variant="outlined">
                <Typography>{label}</Typography>
                <Select
                    value={defaultValue} // Set the default value here
                    onChange={(e) => onChange(e.target.value, name)}
                    name={name}
                    className={`select-input ${className}`}
                    variant="outlined"
                >
                    {options.map((option, index) => (
                        <MenuItem key={index} value={option.code}>
                            {`${option.code}, ${option.country}`}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Fragment>
    );
};

export default SelectInput;
