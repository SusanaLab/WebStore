import React, { useState } from "react";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuList,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { LocalLaundryServiceSharp } from "@mui/icons-material";
import FiberSmartRecordIcon from "@mui/icons-material/FiberSmartRecord";
import CartWidget from "../../common/cartWidget/CartWidget";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorNav, setAnchorNav] = useState(null);

  const openMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <img src={logo} alt="Logo" style={{ width: 15, height: 35 }} />
          </Box>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            color="dark"
            component="div"
            sx={{
              flexGrow: 1,
              display: { textDecoration: "none", xs: "none", md: "flex" },
            }}
          >
            LAFFET
          </Typography>
        </Link>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Link to="/category/ceramics">
            <Button color="dark">Ceramic</Button>
          </Link>
          <Link to="/category/lamps">
            <Button color="dark">Lamps</Button>
          </Link>
          <Link to="/category/furniture">
            <Button color="dark">Furniture</Button>
          </Link>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={openMenu}>
            <MenuIcon color="secondary" />
          </IconButton>
          <Menu
            open={Boolean(anchorNav)}
            onClose={closeMenu}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuList>
              <Link to="/category/ceramics">
                <MenuItem> Ceramic</MenuItem>
              </Link>
              <Link to="/category/lamps">
                <MenuItem>Lamps</MenuItem>
              </Link>
              <Link to="/category/furniture">
                {" "}
                <MenuItem>Furniture</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "flex" }, marginLeft: "auto" }}>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
