import React, { Fragment } from "react";
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

    return (
        <Fragment>
            <FormControl fullWidth variant="outlined">
                <Typography>{label}</Typography>
                <Select
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
