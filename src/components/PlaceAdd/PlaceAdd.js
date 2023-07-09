import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import classes from "./PlaceAdd.module.scss";

export const PlaceAdd = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isWCAccessible, setIsWCAccessible] = useState(false);
  const [totalStairs, setTotalStairs] = useState(0);
  const [accessibility, setAccessibility] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(
      "Submitted!",
      name,
      address,
      phoneNumber,
      isWCAccessible,
      totalStairs,
      accessibility
    );
  };

  return (
    <form className={classes} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <TextField
        label="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />

      <TextField
        label="Total Stairs"
        type="number"
        value={totalStairs}
        onChange={(e) => setTotalStairs(Number(e.target.value))}
        required
      />
      <TextField
        label="Accessibility"
        type="number"
        value={accessibility}
        onChange={(e) => setAccessibility(Number(e.target.value))}
        required
      />
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
