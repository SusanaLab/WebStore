import React from 'react'
import imagen from '../images/descarga.png'
const Home = () => {
  return (
    <>
      Home
      <h1 style={{ color: "peru" }}> nholdjsklj</h1>
      <img
        src="data:image/png;base64,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"
        alt=""
      />
      <img src="/public/vite.svg" alt="" />
      <img src={imagen} alt="" />
      <img
        src="https://res.cloudinary.com/dghompujs/image/upload/v1710859871/descarga_ifvojc.png"
        alt=""
      />
    </>
  );
}

export default Home