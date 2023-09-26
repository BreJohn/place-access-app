import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./Entrance.module.scss";
import { CustomFormControl } from "../../../components/UI/CustomFormControl";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";

export const Entrance = (props) => {
  const [stairs, setStairs] = useState(false);

  const { id } = useParams();
  const places = useSelector((state) => state.googlePlaces.googlePlaces).filter(
    (place) => place.id === id
  );

  const onSetStairs = (value) => {
    console.log(value);
    setStairs(value);
  };

  const onSetSteps = (value) => {
    console.log(value);
  };

  console.log("Entrance", places);
  return (
    <div className={classes.container}>
      <h1>Accessibility Information</h1>
      <form>
        <div className={classes.stairs}>
          <FormControlLabel
            control={
              <Checkbox
                checked={stairs}
                onChange={(e) => onSetStairs(e.target.checked)}
              />
            }
            label="Stairs"
          />

          <CustomFormControl
            label="Steps"
            required={true}
            onChange={(e) => onSetSteps(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
