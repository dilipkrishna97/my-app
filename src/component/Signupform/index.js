import "./style.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  emailId,
  validPassword,
  specialChar,
  upperCase,
  lowerCase,
  number,
  stringLength,
} from "../../Regx/expression";
import {
  Button,
  Grid,
  Paper,
  TextField,
  Link,
  Typography,
  Alert,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/action";

const Signupform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const paperStyle = {
    padding: 20,
    height: "70vh",
    margin: "90px auto 20px auto",
    width: "350px",
  };

  const inputStyle = {
    margin: "auto auto 30px auto",
  };

  const buttonStyle = {
    margin: "20px 180px 10px auto",
    cursor: "pointer",
  };

  let history = useHistory();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    if (email === "" || password === "" || name === "") {
      alert("Please enter all the fields");
    }

    const userDetails = {
      name,
      email,
      password,
    };

    const message = [];

    if (!emailId.test(email)) {
      alert("Please enter valid email id");
    }

    if (!stringLength.test(password)) {
      message.push("Length of password is less than 8 characters");
    }

    if (!specialChar.test(password)) {
      message.push("Special character is not included in password");
    }

    if (!upperCase.test(password)) {
      message.push("Uppercase character is not included in password");
    }

    if (!lowerCase.test(password)) {
      message.push("Lower character is not included in password");
    }

    if (!number.test(password)) {
      message.push("Number is not included in password");
    }

    if (!validPassword.test(password)) {
      alert(message.toString().replaceAll(",", "\n"));
    }

    if (emailId.test(email) && validPassword.test(password)) {
      if (!(email === "" || password === "" || name === "")) {
        dispatch(addUser(userDetails));
        alert("Registered succesfully");
        history.push("/");
      }
    }
  };

  const handleBack = (e) => {
    history.push("/");
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Sign-up</h2>
        </Grid>
        <TextField
          style={inputStyle}
          id="name"
          label="Name"
          variant="standard"
          placeholder="Enter name"
          onChange={(e) => handleName(e)}
          fullWidth
        />
        <TextField
          style={inputStyle}
          id="email"
          label="Email"
          variant="standard"
          placeholder="Enter valid email"
          onChange={(e) => handleEmail(e)}
          fullWidth
        />
        <TextField
          style={inputStyle}
          id="password"
          label="Password"
          variant="standard"
          placeholder="Enter password"
          onChange={(e) => handlePassword(e)}
          fullWidth
        />

        <Alert severity="warning">
          Password should :<h5 className="text"> - lower case letters </h5>
          <h5 className="text"> - upper case letters</h5>
          <h5 className="text"> - number</h5>
          <h5 className="text"> - a special character !@#$%^&*</h5>
          <h5 className="text"> - more than 8 characters long</h5>
        </Alert>
        <Grid>
          <Typography>
            <Link style={buttonStyle} onClick={() => handleBack()}>
              Sign-in{" "}
            </Link>

            <Button
              type="submit"
              variant="contained"
              onClick={() => handleRegister()}
            >
              Register
            </Button>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Signupform;
