import { ThemeProvider } from "@mui/material";
import theme from "./components/styles/themeConfig";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/common/ItemListContainer/ItemListContainer";
import "./index.css";

function App() {
  const saludo = "Bienvenido User, Transforma tu hogar, inspira tu vida.";
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <ItemListContainer greeting={saludo} />
      </ThemeProvider>
    </>
  );
}

export default App;
