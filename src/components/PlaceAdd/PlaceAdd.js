import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {
  Checkbox,
  FormControlLabel,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import classes from "./PlaceAdd.module.scss";
// import StarRatingComponent from "react-star-rating-component";

export const PlaceAdd = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumberControl, setPhoneNumberControl] = useState({
    value: "",
    hasError: false,
    errorText: "",
  });
  const [isWCAccessible, setIsWCAccessible] = useState(false);
  const [totalStairs, setTotalStairs] = useState(0);
  const [accessibility, setAccessibility] = useState(0);

  useEffect(() => {
    if (phoneNumberControl.hasError) {
      setPhoneNumberControl((prevState) => ({
        ...prevState,
        errorText: "Enter a valid phone number",
      }));
    } else {
      setPhoneNumberControl((prevState) => ({
        ...prevState,
        errorText: "",
      }));
    }
  }, [phoneNumberControl.hasError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(
      "Submitted!",
      name,
      address,
      phoneNumberControl.value,
      isWCAccessible,
      totalStairs,
      accessibility
    );
  };

  const handlePhoneNumberBlur = (value) => {
    if (!value) return;

    setPhoneNumberControl((prevState) => ({
      ...prevState,
      hasError: !isValidPhoneNumber(value),
    }));
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{9,10}$/;
    const result = phoneRegex.test(phoneNumber);
    return result;
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
        onChange={(e) =>
          setPhoneNumberControl({
            ...phoneNumberControl,
            value: e.target.value,
          })
        }
        onBlur={(e) => handlePhoneNumberBlur(e.target.value)}
        error={!!phoneNumberControl.hasError}
        helperText={phoneNumberControl.errorText}
        required
      />
      <TextField
        label="Total Stairs"
        type="number"
        value={totalStairs}
        onChange={(e) => setTotalStairs(Number(e.target.value))}
        required
      />
      {/* <div className={classes.accessibility}>
        Accessibility:
        <StarRatingComponent
          name="accessibility"
          value={accessibility}
          onStarClick={setAccessibility}
          starCount={5}
          starColor="#FFD700"
          emptyStarColor="#808080"
        />
      </div> */}
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
