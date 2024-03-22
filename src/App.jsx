import { ThemeProvider } from "@mui/material";
import theme from "./components/styles/themeConfig";
import Counter from "./components/common/counter/Counter";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import "./index.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </>
  );
}

export default App;
