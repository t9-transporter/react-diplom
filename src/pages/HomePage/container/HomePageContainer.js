import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SIGN_IN_REQUEST } from "../actions";

import HomePageLayout from "../components/HomePageLayout";

const HomePageContainer = () => {
  const dispath = useDispatch();
  const isAuth = useSelector((state) => state.authReducers);
  const [loginValue, handleChange] = useState({ email: "", password: "" });

  const handleLoginChange = (event) => {
    let value = event.target.value;
    handleChange((state) => {
      return {
        ...state,
        [event.target.name]: value,
      };
    });
  };

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispath(SIGN_IN_REQUEST(loginValue));
    },
    [loginValue, dispath]
  );

  const handleLogOut = () => {
    localStorage.clear();
  };

  return (
    <HomePageLayout
      loginValue={loginValue}
      isAuth={isAuth}
      handleLoginChange={handleLoginChange}
      handleSubmit={handleSubmit}
      handleLogOut={handleLogOut}
    />
  );
};

export default HomePageContainer;
