import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./Entrance.module.scss";
import { CustomFormControl } from "../../../components/UI/CustomFormControl";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { UploadImage } from "../../../components/UI/UploadImage";

export const Entrance = (props) => {
  const [enteredValues, setEnteredValues] = useState({
    hasStairs: false,
    steps: "",
    stepWidth: "",
    doorWidth: "",
    doorHeight: "",
    image: {},
  });

  const { id } = useParams();

  const place = useSelector((state) => state.googlePlaces.googlePlaces).filter(
    (place) => place.id === id
  );

  const onSetValue = (value, key) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const onSelectImage = (e) => {
    if (!e.target.files || e.target.files.length === 0 || !e.target.files[0]) {
      setEnteredValues((prevValues) => ({ ...prevValues, image: {} }));
      return;
    }

    if (e.target.files[0].size > 2097152) {
      alert("File size is too large, try a different image");
      setEnteredValues((prevValues) => ({ ...prevValues, image: {} }));
      return;
    }

    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setEnteredValues((prevValues) => ({
      ...prevValues,
      image: {
        objectUrl,
        file: e.target.files[0],
      },
    }));
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    fd.append("image", enteredValues.image.file);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    onReset(event);
  };

  const onReset = (event) => {
    setEnteredValues((prevValues) => ({
      hasStairs: false,
      steps: "",
      stepWidth: "",
      doorWidth: "",
      doorHeight: "",
      image: {},
    }));
  };

  // const handleImageUpload = (e) => {
  //   const imageURL = URL.createObjectURL(e.target.files[0]); // Create a URL for the selected image

  //   setImage((prevState) => ({
  //     ...prevState,
  //     image: imageURL.toString(), // Create a preview URL for the selected image
  //   }));
  // };

  // useEffect(() => {
  //   if (!selectedFile) {
  //     setPreview(undefined);
  //     return;
  //   }

  //   const objectUrl = URL.createObjectURL(selectedFile);
  //   setPreview(objectUrl);

  //   // free memory when ever this component is unmounted
  //   return () => URL.revokeObjectURL(objectUrl);
  // }, [selectedFile]);
  return (
    <div className={classes.container}>
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
              onChange={(e) => onSetValue(e.target.checked, "steps")}
              min={1}
              name="steps"
            />
            <CustomFormControl
              label="Width"
              required={true}
              value={enteredValues.stepWidth}
              disabled={!enteredValues.hasStairs}
              onChange={(e) => onSetValue(e.target.checked, "stepWidth")}
              name="stepWidth"
            />
            <span>CM</span>
          </div>
          <div className={classes.group}>
            <CustomFormControl
              label="Door Width"
              required={true}
              value={enteredValues.doorWidth}
              onChange={(e) => onSetValue(e.target.checked, "doorWidth")}
              name="doorWidth"
            />
            <span>CM</span>

            <CustomFormControl
              label="Door Height"
              required={true}
              value={enteredValues.doorHeight}
              onChange={(e) => onSetValue(e.target.checked, "doorHeight")}
              name="doorHeight"
            />
            <span>CM</span>
          </div>

          <UploadImage
            image={enteredValues.image.objectUrl}
            onSelectImage={onSelectImage}
          />
          <div className={classes.buttons}>
            <Button
              type="reset"
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
    </div>
  );
};
