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
        item
        xs={12}
        md={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={newProdducts}
            alt="Logo"
            style={{ width: "100%", height: "auto" }}
          />
          <Box>
            <Typography
              variant="h4"
              color="primary"
              gutterBottom
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                margin: 10,
                paddingTop:7,
                paddingRight: 1,
                paddingLeft: 1,
      
              }}
            >
              Unveil the latest arrivals and embark on a journey of discovery
              through our newest collection. Explore now and elevate your home
              with our freshest finds
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h2"
              color="primary"
              gutterBottom
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                padding: 4,
                margin: 5,
              }}
            >
              Muebles
            </Typography>
          </Box>
          <Button
            variant="contained"
            size="large"
            sx={{
              position: "absolute",
              bottom: 19,
              left: "50%",
              transform: "translateX(-50%)",
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