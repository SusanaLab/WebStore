import React from "react";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Grid container alignItems="center" justifyContent="center" sx={{ mt: 3 }}>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <img src={logo} alt="Logo" style={{ width: 15, height: 35 }} />
        </Box>

        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          justifyContent="center"
        >
          <Link to="/category/lamps" style={{ textDecoration: "none" }}>
            <Typography variant="h5">Lamps</Typography>
          </Link>
          <Link to="/category/furniture" style={{ textDecoration: "none" }}>
            <Typography variant="h5">Furniture</Typography>
          </Link>
          <Link to="/category/ceramics" style={{ textDecoration: "none" }}>
            <Typography variant="h5">Ceramics</Typography>
          </Link>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" align="center">
          Laffet. All rights reserved
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
