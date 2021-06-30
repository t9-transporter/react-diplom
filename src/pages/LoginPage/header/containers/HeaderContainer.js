import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";

import HeaderLayout from "../components/HeaderLayout/index";

const HeaderContainer = () => {
  const isAuth = useSelector((state) => state.authReducers.isAuth);

  const [anchorEl, setAnchorEl] = useState(null);

  const logOut = useCallback(() => {
    localStorage.clear();
  }, []);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <HeaderLayout
      isAuth={isAuth}
      logOut={logOut}
      anchorEl={anchorEl}
      handleClick={handleClick}
      handleClose={handleClose}
    />
  );
};

export default React.memo(HeaderContainer);
