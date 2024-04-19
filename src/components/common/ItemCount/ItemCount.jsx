import React, { useState, useCallback } from "react";
import ItemCountContainer from "./ItemCountContainer";

const ItemCount = ({stock, initial, onAdd}) => {
 

  return (
    <>
<ItemCountContainer stock={stock} initial={1} />
    </>

  );
};

export default ItemCount;
