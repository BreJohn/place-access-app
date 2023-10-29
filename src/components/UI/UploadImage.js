import React from "react";

import { Button, Card, CardMedia } from "@mui/material";

export const UploadImage = (props) => {
  return (
    <div>
      <Card>
        {props.image && (
          <CardMedia
            component="img"
            alt="Uploaded Image"
            height="140"
            image={props.image}
          />
        )}
      </Card>
      <label htmlFor="image-upload">
        <Button component="span" variant="outlined" color="primary">
          Upload Image
        </Button>
      </label>
      <input
        type="file"
        id="image-upload"
        onChange={props.onSelectImage}
        style={{ display: "none" }}
      />
    </div>
  );
};
