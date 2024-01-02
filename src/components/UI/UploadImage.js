import React from "react";

import { Button, Card, CardMedia } from "@mui/material";
import { Spinner } from "./Spinner/Spinner";
import classes from "./UploadImage.module.scss";
export const UploadImage = (props) => {
  return (
    <div className={classes["upload-image-container"]}>
      {!props.loading ? (
        <React.Fragment>
          <Card className={classes.card}>
            {props.image && (
              <CardMedia
                component="img"
                alt="Uploaded Image"
                width="300"
                image={props.image}
              />
            )}
          </Card>
          <label htmlFor="image-upload">
            <Button component="span" variant="outlined" color="primary">
              {props.image ? "Upload New Image" : "Upload Image"}
            </Button>
          </label>
          <input
            type="file"
            id="image-upload"
            onChange={props.onSelectImage}
            style={{ display: "none" }}
          />
        </React.Fragment>
      ) : (
        <Spinner size={120} />
      )}
    </div>
  );
};
