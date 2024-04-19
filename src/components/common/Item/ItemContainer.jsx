
import React from "react";
import { Box, Grid, Typography, Stack, Chip, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { Link, useParams } from "react-router-dom";

const ItemContainer = ({ name, description, price, img, id }) => {  

  return (
    <Link to={`/itemDetail/${id}`} style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 345, margin: 1, padding: 1 }}>
        <CardMedia sx={{ height: 140 }} image={img} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="h4">${price}</Typography>
          <Stack direction="row" mt={0} spacing={1} alignItems="center">
            <StarRoundedIcon color="acento" />
            <StarRoundedIcon color="acento" />
            <StarRoundedIcon color="acento" />
          </Stack>
          <Stack direction="row" spacing={1} mt={2} alignItems="center">
            <Chip
              icon={<ShoppingCartRoundedIcon color="dark" />}
              label="Add to cart"
            />
            <Chip
              icon={<FavoriteRoundedIcon color="dark" />}
              label="Favorite"
            />
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ItemContainer;
   