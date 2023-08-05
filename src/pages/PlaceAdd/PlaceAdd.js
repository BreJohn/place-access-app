import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Checkbox, FormControlLabel, Rating, Typography } from "@mui/material";
import classes from "./PlaceAdd.module.scss";
import { CustomFormControl } from "../../components/UI/CustomFormControl";

export const PlaceAdd = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [isWCAccessible, setIsWCAccessible] = useState(false);
  const [totalStairs, setTotalStairs] = useState(0);
  const [accessibility, setAccessibility] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (phoneNumberControl.hasError) return;
    // Handle form submission
    console.log(e);
  };

  const isInvalidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{9,10}$/;
    const result = phoneRegex.test(phoneNumber);
    return !result;
  };

  const testTata = (val) => {
    console.log(val);
  };

  return (
    <form className={classes} onSubmit={handleSubmit}>
      <CustomFormControl
        label="Name"
        required={true}
        onChange={(e) => setName(e.target.value)}
      />
      <CustomFormControl
        label="Address"
        required={true}
        onChange={(e) => setAddress(e.target.value)}
      />
      <CustomFormControl
        label="Phone Number"
        required={true}
        validator={isInvalidPhoneNumber}
      />
      <CustomFormControl
        label="Total Stairs"
        type="number"
        onChange={(e) => setTotalStairs(Number(e.target.value))}
        required={true}
      />

      <div>
        <Typography component="legend">Accessibility</Typography>

        <Rating
          name="accessibility"
          value={accessibility}
          onChange={(event, newValue) => {
            setAccessibility(newValue);
          }}
        />
      </div>
      <FormControlLabel
        control={
          <Checkbox
            checked={isWCAccessible}
            onChange={(e) => setIsWCAccessible(e.target.checked)}
            color="primary"
          />
        }
        label="WC Accessible"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};
