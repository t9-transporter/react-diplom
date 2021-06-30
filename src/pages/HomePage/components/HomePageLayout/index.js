import React from "react";

import { Button, TextField, Typography, Box } from "@material-ui/core/";

import "./index.css";

const HomePageLayout = ({
  modalClass,
  loginValue,
  isAuth,

  handleLoginChange,
  handleSubmit,
  handleLogOut,
}) => {
  return (
    <div>
      <div className="entry">
        {!isAuth.isAuth ? (
          <>
            <div className={isAuth.isAuth ? "modal" : modalClass}>
              <div className="modal__content">
                <form onSubmit={(event) => handleSubmit(event)}>
                  <Typography className="modal-logo">
                    Enter your account
                  </Typography>
                  <TextField
                    className="modal-input"
                    label="Email"
                    type="email"
                    name="email"
                    value={loginValue.email}
                    onChange={(event) => handleLoginChange(event)}
                    required
                  />
                  <TextField
                    className="modal-input"
                    label="Password"
                    type="password"
                    name="password"
                    value={loginValue.password}
                    onChange={(event) => handleLoginChange(event)}
                    required
                  />
                  <Box margin="10px 0" color="red">
                    {" "}
                    {isAuth.isAuth ? "" : isAuth.errors}
                  </Box>
                  <Button
                    style={{ marginBottom: "1rem" }}
                    fullWidth
                    type="submit"
                    variant="outlined"
                    color="primary"
                  >
                    Sign in
                  </Button>
                  <div>
                    <Button
                      fullWidth
                      className="entry__in"
                      variant="outlined"
                      color="primary"
                      href="/market/registration"
                    >
                      Registration
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </>
        ) : (
          <Button
            className="entry__in"
            variant="contained"
            color="primary"
            onClick={handleLogOut}
            href="/"
          >
            <Box style={{ display: "none" }}>
              {(document.location.href = "market/page1")}
            </Box>
            log out
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomePageLayout;
