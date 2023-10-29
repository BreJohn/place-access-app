import React, { useState } from "react";
import { TextField } from "@mui/material";

export const CustomFormControl = ({
  value,
  onBlur,
  onChange,
  ...restProps
}) => {
  const [formControl, setFormControl] = useState({
    hasError: false,
    errorText: `${restProps.label} is not valid`,
    isTouched: false,
    required: false,
    ...restProps,
  });

  const handleOnBlur = (e) => {
    const hasError = restProps.validator
      ? restProps.validator(e.target.value)
      : false;
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
        formControl.isTouched && restProps.validator
          ? restProps.validator(e.target.value)
          : formControl.hasError,
    });
    onChange && onChange(e);
  };
  const numberInput = (
    <TextField
      inputProps={{
        type: "number",
        inputMode: "numeric",
        pattern: "[0-9]*",
        min: restProps.min,
      }}
      {...restProps}
    />
  );

  return restProps.numeric ? (
    numberInput
  ) : (
    <TextField
      onChange={(e) => handleOnChange(e)}
      onBlur={(e) => handleOnBlur(e)}
      error={!!formControl.hasError}
      helperText={
        !!formControl.hasError && formControl.isTouched
          ? formControl.errorText
          : ""
      }
      {...restProps}
    />
  );
};
