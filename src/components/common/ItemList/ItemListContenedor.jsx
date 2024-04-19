import React, { useEffect, useState } from "react";
import { products } from "../../../data/Products";
import { Box, Grid } from "@mui/material";
import ItemContainer from "../Item/ItemContainer";
import { useParams } from "react-router-dom";

const ItemListContenedor = () => {
  const [items, setItems] = useState([]);
const {category}= useParams()

useEffect(() => {
    const fetchingData = async () => {
      try {
        setTimeout(() => {
          let filterProducts = products.filter(product=> product.category === category)
          const getProducts = new Promise((resolve) => {
            let x = true;
            if (x) {
              resolve(category? filterProducts:products);
            } else {
              throw new Error("Something went wrong");
            }
          });
          getProducts.then((data) => {
            setItems(data);
          });
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    };

    fetchingData();
  }, [category]);



  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }} /*  sx={{ flexGrow: 1 }} */
    >
      <Grid
        container
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 1, sm: 2, md: 4 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          padding: 5,
        }}
      >
        {items &&
          items.map((item) => (
            <Grid key={item.id} item xs={1} sm={1} md={1}>
              <ItemContainer
                name={item.name}
                description={item.description}
                price={item.price}
                img={item.img}
                id={item.id}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default ItemListContenedor;
