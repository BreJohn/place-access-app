import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./Entrance.module.scss";
import { CustomFormControl } from "../../../components/UI/CustomFormControl";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { UploadImage } from "../../../components/UI/UploadImage";

export const Entrance = (props) => {
  const [hasStairs, setHasStairs] = useState(false);
  const [steps, setSteps] = useState("");
  const [stepWidth, setStepWidth] = useState("");
  const [doorWidth, setDoorWidth] = useState("");
  const [doorHeight, setDoorHeight] = useState("");

  const [image, setImage] = useState();

  const { id } = useParams();
  const place = useSelector((state) => state.googlePlaces.googlePlaces).filter(
    (place) => place.id === id
  );

  const onSetHasStairs = (value) => {
    setHasStairs(value);
  };

  const onSetSteps = (value) => {
    setSteps(value);
  };

  const onSetStepWidth = (value) => {
    stepWidth(value);
  };

  const onSetDoorWidth = (value) => {
    setDoorWidth(value);
  };

  const onSetDoorHeight = (value) => {
    setDoorHeight(value);
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

  const onSelectImage = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setImage(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    if (!e.target.files[0]) {
      setImage(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setImage(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  };

  return (
    <div className={classes.container}>
      <h1>Entrance Accessibility Information</h1>
      <form>
        <div className={classes.controls}>
          <div className={classes.group}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={hasStairs}
                  onChange={(e) => onSetHasStairs(e.target.checked)}
                />
              }
              label="Stairs"
            />

            <CustomFormControl
              label="Steps"
              required={true}
              value={steps}
              disabled={!hasStairs}
              numeric="true"
              onChange={(e) => onSetSteps(e.target.value)}
              min={1}
            />
            <CustomFormControl
              label="Width"
              required={true}
              value={stepWidth}
              disabled={!hasStairs}
              onChange={(e) => onSetStepWidth(e.target.value)}
            />
            <span>CM</span>
          </div>
          <div className={classes.group}>
            <CustomFormControl
              label="Door Width"
              required={true}
              value={doorWidth}
              onChange={(e) => onSetDoorWidth(e.target.value)}
            />
            <span>CM</span>

            <CustomFormControl
              label="Door Height"
              required={true}
              value={doorHeight}
              onChange={(e) => onSetDoorHeight(e.target.value)}
            />
            <span>CM</span>
          </div>

          <UploadImage image={image} onSelectImage={onSelectImage} />

          <Button variant="contained">Submit</Button>
        </div>
      </form>
    </div>
  );
};
