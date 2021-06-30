import React from "react";
import {
  Button,
  Box,
  Menu,
  MenuItem,
  Link,
  IconButton,
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../../../../helpers/logo/pokemon_logo.png";

import "./index.css";

const HeaderLayout = ({
  isAuth,
  logOut,
  anchorEl,
  handleClick,
  handleClose,
}) => {
  return (
    <Box>
      <Box className="header">
        <Box className="header__name">
          <Link className="header__link" href="/market/page1">
            <img src={logo} alt="logo" className="headerLogo" />
          </Link>
        </Box>
        <Box className="header__content">
          {isAuth ? (
            <>
              <Box className="header__menu">
                <IconButton
                  color="inherit"
                  edge="end"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem className="simple-menu-item" onClick={logOut}>
                    <Button className="simple-menu-item-btn" href="/market">
                      Log out
                    </Button>
                  </MenuItem>
                </Menu>
              </Box>
            </>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderLayout;
