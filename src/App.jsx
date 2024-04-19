import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./components/styles/themeConfig";
import ItemListContainer from "./components/common/ItemListContainer/ItemListContainer";
import "./index.css";
import Layout from "./components/layout/layout/Layout";
import Error from "./components/pages/Error/Error";
import ItemDetailContainer from "./components/common/ItemDetail/ItemDetailContainer";
import CartContainer from "./components/common/CartContainer/CartContainer";
import Home from "./components/pages/home/Home";

function App() {
  const greeting = "Welcome, Transform your home, inspire your life.";

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes> 
      
          <Route
            path="/"
            element={
           <Layout>
              <Home/>
                <ItemListContainer greeting={greeting} />
           </Layout>
            }
          />
          <Route
            path="/category/:category"
            element={
           <Layout>
       {/*        <Home/> */}
                <ItemListContainer greeting={greeting} />
           </Layout>
            }
          />
          <Route path="/itemDetail/:id" element={
            <Layout>
          <ItemDetailContainer />
          </Layout>} />
          <Route path="/cart" element={  <Layout> <CartContainer /></Layout>} />  
          
          <Route path="*" element={<Error />} /> 
          
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
