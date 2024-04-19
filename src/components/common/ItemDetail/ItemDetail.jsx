import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {

  if (!item) {
    return <div>Loading...</div>; 
  }

  const { name, description, price, img, stars, stock } = item;
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      height="100vh"
      padding={10}
      margin={10}
      sx={{
        margin: 0,
        padding: 0,
        "@media (max-width: 600px)": { margin: "auto", padding: "10px" },
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          margin: 0,
          padding: 0,
          "@media (max-width: 600px)": { margin: "auto", padding: "10px" },
        }}
      >
        <img
          src={img}
          alt="Logo"
          style={{
            width: "100%",
            maxWidth: 500,
            height: "auto",
            margin: 29,
            padding: 4,
          }}
        />
      </Grid>

      <Grid
        container
        item
        xs={12}
        md={6}
        spacing={0}
        mt={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 4,
          margin: 0,
        }}
      >
        <Typography variant="h2" mt={4} gutterBottom>
          {name}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            paddingRight: 0,
          }}
          gutterBottom
        >
          {description}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {price}
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center">
          <StarRoundedIcon color="dark" />
          <StarRoundedIcon color="dark" />
          <StarRoundedIcon color="dark" />
        </Stack>
        <Typography variant="h6" mt={4} gutterBottom>
          Availability: {stock} in stock
        </Typography>
        <Box mt={2}>
          <ItemCount stock={stock} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
