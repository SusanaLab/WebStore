import React, { useState, useCallback } from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ItemCountContainer = ({ stock, initial }) => {

  const [count, setCount] = useState(initial);
  const [itemNumber, setItemNumber] = useState(0);

  const increment = useCallback(() => {
    if (count < stock) {
      setCount(count + 1);
    }
  }, [count, stock]);

  const decrement = useCallback(() => {
    if (count > 0) {
      setCount(count - 1);
    }
  }, [count]);

  const onAdd = () => {
    if (count > 0 && count <= stock) {
      return setItemNumber(count);
    } else {
      console.log("There is no stock");
    }
  };

  return (
    <Grid>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="dark"
          onClick={decrement}
          disabled={count === 0|| stock === 0}
          sx={{ color: "white" }}
        >
          -
        </Button>
        <Typography variant="h5" component="h2" sx={{ margin: "0 10px" }}>
          {count}
        </Typography>
        <Button
          variant="contained"
          color="dark"
          disabled={count === stock|| stock === 0}
          onClick={increment}
          sx={{ color: "white" }}
        >
          +
        </Button>
      </Stack>
      <Stack direction="row" mt={4} spacing={5} alignItems="center">
        <Button
          color="dark"
          variant="contained"
          onClick={onAdd}
          sx={{ fontWeight: "bold", color: "#ffffff" }}
        >
          Add to cart
        </Button>
         <Link to="/"><Button color="primary" variant="contained" sx={{ fontWeight: "bold" }}>
          Go back
        </Button></Link> 
      </Stack>
    </Grid>
  );
};

export default ItemCountContainer;
