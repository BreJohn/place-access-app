import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./Entrance.module.scss";
import { CustomFormControl } from "../../../components/UI/CustomFormControl";
import { Button, Card, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { UploadImage } from "../../../components/UI/UploadImage";
import {
  downloadImageFromDB,
  saveGooglePlaceToDB,
} from "../../../services/firestore";
import { useMemo } from "react";

export const Entrance = (props) => {
  const [enteredValues, setEnteredValues] = useState({
    hasStairs: false,
    steps: "",
    stepWidth: "",
    doorWidth: "",
    doorHeight: "",
  });

  const [image, setImage] = useState(null);

  const { id } = useParams();
  useEffect(async () => {
    const url = await downloadImageFromDB(id, "entrance");
    setImage({ objectUrl: url });
  }, []);
  const isGoogleOnly = window.location.href.includes("google");

  const place = useSelector((state) => {
    return isGoogleOnly
      ? state.googlePlaces.googlePlaces.filter((place) => place.id === id)[0]
      : state.accessPlaces.accessPlaces.filter((place) => place.id === id)[0];
  });
  const loading = useSelector((state) => state.accessPlaces.isLoading);
  // Memoize the place using useMemo
  useMemo(() => {
    if (place && place?.accessibility?.entrance) {
      setEnteredValues({ ...place.accessibility.entrance });
      return;
    }
  }, [place]);

  const onSetValue = (value, key) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const onSelectImage = (e) => {
    if (!e.target.files || e.target.files.length === 0 || !e.target.files[0]) {
      setImage(null);
      return;
    }

    if (e.target.files[0].size > 2097152) {
      alert("File size is too large, try a different image");
      setEnteredValues((prevValues) => ({ ...prevValues, image: {} }));
      return;
    }

    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setImage({
      objectUrl,
      file: e.target.files[0],
    });
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  };

  const onFormSubmit = (event) => {
    console.log(enteredValues);
    event.preventDefault();
    const fd = new FormData(event.target);

    const data = Object.fromEntries(fd.entries());

    const entrance = {
      entrance: { ...data, hasStairs: data.hasStairs === "on" },
    };
    const accessPlace = { ...place, accessibility: { ...entrance } };

    saveGooglePlaceToDB(accessPlace, image, "entrance");
    // console.log(accessPlace);
  };

  const onReset = (event) => {
    setEnteredValues({
      hasStairs: false,
      steps: "",
      stepWidth: "",
      doorWidth: "",
      doorHeight: "",
    });
    setImage(null);
  };

  return (
    <Card className={classes.container}>
      <h1>Entrance Accessibility Information</h1>
      <form onSubmit={onFormSubmit}>
        <div className={classes.controls}>
          <div className={classes.group}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={enteredValues.hasStairs}
                  onChange={(e) => onSetValue(e.target.checked, "hasStairs")}
                />
              }
              label="Stairs"
              name="hasStairs"
            />
            <CustomFormControl
              label="Steps"
              required={true}
              value={enteredValues.steps}
              disabled={!enteredValues.hasStairs}
              numeric="true"
              onChange={(e) => onSetValue(e.target.value, "steps")}
              min={1}
              name="steps"
            />
            <CustomFormControl
              label="Width"
              required={true}
              value={enteredValues.stepWidth}
              disabled={!enteredValues.hasStairs}
              onChange={(e) => onSetValue(e.target.value, "stepWidth")}
              name="stepWidth"
            />
            <span>cm</span>
          </div>
          <div className={classes.group}>
            <CustomFormControl
              label="Door Width"
              required={true}
              value={enteredValues.doorWidth}
              onChange={(e) => onSetValue(e.target.value, "doorWidth")}
              name="doorWidth"
            />
            <span>cm</span>

            <CustomFormControl
              label="Door Height"
              required={true}
              value={enteredValues.doorHeight}
              onChange={(e) => onSetValue(e.target.value, "doorHeight")}
              name="doorHeight"
            />
            <span>cm</span>
          </div>
          <UploadImage
            loading={loading}
            image={image?.objectUrl}
            onSelectImage={onSelectImage}
          />
          <div className={classes.buttons}>
            <Button
              type="button"
              variant="contained"
              color="error"
              onClick={onReset}
            >
              Reset
            </Button>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};
