import React from "react";
import { Box, Typography } from "@mui/material";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <Box>
        <Typography
          color="third.dark"
          variant="h4"
          align="center"
          sx={{ marginTop: "2rem" }}
        >
          {greeting}
        </Typography>
      </Box>
    </div>
  );
};

export default ItemListContainer;
