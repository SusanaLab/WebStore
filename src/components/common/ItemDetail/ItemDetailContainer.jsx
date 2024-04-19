import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { products } from "../../../data/Products";
import React, { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
console.log(item);
  useEffect(() => {
    let itemEncontrado = products.find(
      (product) => product.id === parseInt(id)
    );
    const getItem = new Promise((resolve, reject) => {   setTimeout(() => {
      resolve(itemEncontrado);
    }, 2000);
    });
    getItem.then((res) => setItem(res));
  }, [id]);
  console.log(id);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
