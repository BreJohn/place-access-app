import { Box, CircularProgress } from "@mui/material";
import React from "react";
import classes from "./Spinner.module.scss";

export const Spinner = ({ size }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "250px",
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
};
