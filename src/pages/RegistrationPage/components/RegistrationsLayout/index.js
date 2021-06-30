import React from "react";

import { Box, Button } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import "./index.css";

const RegistationsLayout = ({
  registrationValue,
  handleFormChange,
  handleFormSubmit,
  isSignUp,
  showPassword,
  handleShowPassword,
}) => {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  const checkForm = () => {
    const { email, gender } = registrationValue;
    if (EMAIL_REGEXP.test(email) && !!gender) {
      return false;
    }
    return true;
  };
  return (
    <Box className="reg">
      <form className="formReg" onSubmit={handleFormSubmit}>
        <label>
          <input
            className="registerInput"
            placeholder="Email *"
            name="email"
            type="email"
            required
            value={registrationValue.email}
            onChange={(event) => handleFormChange(event)}
          />
        </label>
        <label>
          <input
            className="registerInput"
            placeholder="First name"
            name="firstName"
            type="text"
            value={registrationValue.firstName}
            onChange={(event) => handleFormChange(event)}
          />
        </label>
        <label>
          <input
            className="registerInput"
            placeholder="Last name"
            name="lastName"
            type="text"
            value={registrationValue.lastName}
            onChange={(event) => handleFormChange(event)}
          />
        </label>
        <label>
          <select
            className="registerInput"
            name="gender"
            onChange={(event) => handleFormChange(event)}
            required
            defaultValue="male"
          >
            <option></option>
            <option name="female" value="female">
              female
            </option>
            <option name="male" value="male">
              male
            </option>
          </select>
        </label>
        <label style={{ position: "relative" }}>
          <input
            placeholder="Password *"
            className="password registerInput"
            name="password"
            type={showPassword ? "text" : "password"}
            minLength="7"
            required
            value={registrationValue.password}
            onChange={(event) => handleFormChange(event)}
          />
          <span
            style={{
              position: "absolute",
              top: "8px",
              right: "5px",
              cursor: "pointer",
              transform: "scale(1.2)",
            }}
            onClick={handleShowPassword}
          >
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </span>

          <Box className="password__mesage">
            Password must contain at least 1 uppercase letter, 2 lowercase
            letters and 3 numbers. The minimum password length is 7 characters.
          </Box>
        </label>
        <label style={{ position: "relative" }}>
          <input
            placeholder="Confirm password *"
            className="password registerInput"
            name="passwordConfirm"
            type={showPassword ? "text" : "password"}
            minLength="7"
            required
          />
          <span
            style={{
              position: "absolute",
              top: "8px",
              right: "5px",
              cursor: "pointer",
              transform: "scale(1.2)",
            }}
            onClick={handleShowPassword}
          >
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </span>
        </label>

        <Button
          style={{ marginBottom: "1rem" }}
          fullWidth
          variant="outlined"
          color="primary"
          type="submit"
          disabled={checkForm()}
        >
          sing in
        </Button>
        <Button variant="outlined" color="primary" href="/market" fullWidth>
          sign up
        </Button>
      </form>

      {}
    </Box>
  );
};

export default RegistationsLayout;
