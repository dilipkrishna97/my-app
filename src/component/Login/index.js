import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userList = useSelector((state) => state.userDetails);

  const locateUser = userList.find(
    (user) => user.email === email && user.password === password
  );

  const paperStyle = {
    padding: 20,
    height: "50vh",
    margin: "150px auto 20px auto",
    width: "350px",
  };

  const inputStyle = {
    margin: "auto auto 30px auto",
  };

  const buttonStyle = {
    margin: "20px auto 10px auto",
  };

  let history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (email === "" || password === "") {
      alert("Enter both the fields");
    } else {
      if (locateUser) {
        history.push("/home");
      } else {
        alert(" Please enter valid Email and Password to sign-in");
      }
    }
  };

  const handleSignUp = () => {
    history.push("/signUp");
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Sign-in</h2>
        </Grid>
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
          placeholder="Enter valid password"
          type="password"
          onChange={(e) => handlePassword(e)}
          fullWidth
        />
        <Grid>
          <Button
            type="submit"
            style={buttonStyle}
            variant="contained"
            onClick={() => handleSubmit()}
            fullWidth
          >
            {" "}
            Sign-in{" "}
          </Button>
        </Grid>
        <Typography>
          <Link onClick={() => handleSignUp()}> Sign-up </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
