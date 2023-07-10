import React, { useState } from "react";
import { TextField } from "@mui/material";

export const CustomFormControl = ({
  label,
  defaultValue,
  validator,
  onBlur,
  onChange,
  required,
  ...restProps
}) => {
  const [formControl, setFormControl] = useState({
    hasError: false,
    errorText: `${label} is not valid`,
    isTouched: false,
    validator: validator,
  });

  const handleOnBlur = (e) => {
    const hasError = validator ? validator(e.target.value) : false;
    setFormControl((prevState) => ({
      ...prevState,
      isTouched: true,
      hasError: hasError,
    }));
    onBlur && onBlur(e);
  };

  const handleOnChange = (e) => {
    setFormControl({
      ...formControl,
      value: e.target.value,
      hasError:
        formControl.isTouched && validator
          ? validator(e.target.value)
          : formControl.hasError,
    });
    onChange && onChange(e);
  };

  return (
    <TextField
      label={label}
      onChange={(e) => handleOnChange(e)}
      onBlur={(e) => handleOnBlur(e)}
      error={!!formControl.hasError}
      helperText={
        !!formControl.hasError && formControl.isTouched
          ? formControl.errorText
          : ""
      }
      required={required}
      {...restProps}
    />
  );
};
