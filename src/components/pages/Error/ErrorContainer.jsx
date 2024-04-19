import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import error from "../../../images/404.png";
import { Link } from "react-router-dom";

const ErrorContainer = () => {
  return (
    <Grid item display="flex" justifyContent="center" alignItems="center">
      <Grid item
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        item
      >
        <img
          src={error}
          alt="Error Logo"
          style={{ width: "100%", maxWidth: 840, height: "auto" }}
        />
        <Typography
          justifyContent="center"
          alignItems="center"
          variant="h5"
          color="secondary"
          gutterBottom
        >
          The page you’re looking for doesn't exist or has been moved
        </Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            mt={6}
            justifyContent="center"
            alignItems="center"
            variant="contained"
            color="acento"
          >
            <Typography variant="h5">Go Home</Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
export default ErrorContainer;
