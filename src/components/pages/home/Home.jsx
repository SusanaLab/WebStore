import { colors } from '@mui/material'
import React from 'react'
import { Box, Button, Typography, Grid } from "@mui/material";
import foto from "../../../images/home_img.png";

const Home = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", 
        padding: 7,
      }}
    >
      <Grid item xs={12} md={6} sx={{ height: "100%" }}>
        <Box sx={{ maxWidth: 900, height: "100%" }}>
          <Typography variant="h1" gutterBottom>
            Elevate your space with artisanal elegance.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Discover bespoke décor for your kitchen, living room, and bedroom -
            tailored to your every need
          </Typography>
          <Button
            variant="outlined"
            color="dark"
            size="large"
            sx={{ marginTop: 5, borderWidth: 4, borderColor: "#1B1A16", padding:1}} // Establece el ancho y color del borde
          >
            <Typography variant="h4" gutterBottom>
              Shop now
            </Typography>
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          <img
            src={foto}
            alt="Logo"
            style={{ width: "100%", maxWidth: 440, height: "auto" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home
