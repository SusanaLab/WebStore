import { ThemeProvider } from "@mui/material";
import theme from "./components/styles/themeConfig";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/common/ItemListContainer/ItemListContainer";
import "./index.css";
import Footer from "./components/layout/footer/Footer";
import Home from "./components/pages/home/Home";
import Categories from "./components/pages/categories/Categories";

function App() {
  const saludo = "Bienvenido User, Transforma tu hogar, inspira tu vida.";
  return (
    <>
     <ThemeProvider theme={theme}>
      <Navbar>  </Navbar>
        <Home/>
        <Categories/>
    {/*     <ItemListContainer greeting={saludo} />
        <Footer/> */}
      
      </ThemeProvider>
    </>
  );
}

export default App;
