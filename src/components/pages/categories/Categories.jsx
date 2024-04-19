import React from 'react'
import ceramica from "../../../images/ceramica.png";
import silla from "../../../images/Sillas.png";
import newProdducts from "../../../images/newProdducts.png";
import { Grid, Box, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Categories = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ position: "relative", width: "100%" }}>
          <img
            src={silla}
            alt="Logo"
            style={{ width: "100%", height: "auto" }}
          />
          <Typography
            variant="h3"
            color="primary"
            gutterBottom
            sx={{ position: "absolute", top: 0, left: 0, margin: "10px" }}
          >
            Muebles
          </Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ position: "relative", width: "100%" }}>
          <img
            src={ceramica}
            alt="Logo"
            style={{ width: "100%", height: "auto" }}
          />
          <Typography
            color="primary"
            variant="h3"
            gutterBottom
            sx={{ position: "absolute", top: 3, left: 0, margin: "10px" }}
          >
            Ceramica
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={12}
        sx={{
          backgroundImage: `url(${newProdducts})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px", // Ajusta la altura mínima según sea necesario
        }}
      >
        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            maxWidth: "80%", // Ajusta el ancho máximo según sea necesario
          }}
        >
          <Typography
            variant="h2"
            color="primary"
            gutterBottom
            sx={{
              margin: 5,
            }}
          >
            Muebles
          </Typography>
          <Typography
            variant="h4"
            color="primary"
            gutterBottom
            sx={{
              margin: 2,
            }}
          >
            Unveil the latest arrivals and embark on a journey of discovery
            through our newest collection.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              margin: 2,
            }}
            endIcon={<ArrowForwardIosIcon />}
          >
            Read more
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Categories;