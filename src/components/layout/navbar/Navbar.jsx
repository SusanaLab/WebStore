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
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ width: 15, height: 35 }} />
        </Box>

        <Typography
          variant="h6"
          color="secondary.dark"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        >
          LAFFET
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button color="secondary">Ceramica</Button>
          <Button color="secondary">Lamparas</Button>
          <Button color="secondary">Muebles</Button>
          <Button color="secondary">Cocina</Button>
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
              <MenuItem> Ceramica</MenuItem>
              <MenuItem>Lamparas</MenuItem>
              <MenuItem>Muebles</MenuItem>
              <MenuItem>Cocina</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "flex" }, marginLeft: "auto" }}>
          {" "}
          <CartWidget />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
