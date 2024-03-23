import { ThemeProvider } from "@mui/material";
import theme from "./components/styles/themeConfig";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/common/ItemListContainer/ItemListContainer";
import "./index.css";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
     <ItemListContainer/>
  
      </ThemeProvider>
    </>
  );
}

export default App;
