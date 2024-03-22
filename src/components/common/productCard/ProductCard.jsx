import React from 'react'

const ProductCard = (props) => {
    const {nombre, decripcion, precio} = props;
  return (
    <div>
        <h1>{props.titulo} </h1>
        <h4>Descripcion</h4>
        <h4>precio</h4>
    </div>
  )
}

export default ProductCard