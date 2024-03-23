import React from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const CardWidget = () => {

  return (
    <Badge color="secondary" badgeContent={8} showZero>
      <ShoppingCartIcon />
    </Badge>
  );
}

export default CardWidget