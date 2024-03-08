import React, { Fragment } from "react";
import { TextField, Typography } from "@mui/material";
import './input.scss';

const Input = (props) => {
  const {
    id = "",
    className = "",
    name = "",
    placeholder = "",
    helperText = "",
    error = false,
    value = "",
    type = "",
    label = "",
    required = false,
    onBlur = () => null,
    onChange = () => null,
    onFocus = () => null,
    fullWidth=false,
    multiline = false,
  } = props;

  return (
    <Fragment>
      <Typography>{label}</Typography>
      <TextField
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange= {((e) =>{onChange(e.target.value,name)})}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`custom-input ${className}`}
        required={required}
        error={error}
        helperText={helperText}
        variant="outlined"
        fullWidth
        multiline={multiline}
      />
    </Fragment>
  );
};

export default Input;
