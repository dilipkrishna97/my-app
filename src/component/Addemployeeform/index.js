import React, { useState, useContext } from "react";
import "./style.css";
import { addEmployees } from "../../redux/action";
import { useDispatch } from "react-redux";
import themeContext from "../../context/themeContext";
import { Button, Box, Modal, TextField } from "@mui/material";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const Addemployeeform = ({ popUp, setPopUp }) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState(new Date().toLocaleDateString());
  const [empId, setEmpId] = useState("");
  const [deptId, setDeptId] = useState("");
  const [deptName, setDeptName] = useState("");
  const [gender, setGender] = useState("");
  const [empRole, setEmpRole] = useState("");

  const theme = useContext(themeContext);

  const dispatch = useDispatch();

  const inputStyle = {
    margin: "auto auto 30px auto",
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDob = (e) => {
    const date = new Date(e).toLocaleDateString();
    setDob(date);
  };

  const handleEmpId = (e) => {
    setEmpId(e.target.value);
  };

  const handleDeptId = (e) => {
    setDeptId(e.target.value);
  };

  const handleDeptName = (e) => {
    setDeptName(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleEmpRole = (e) => {
    setEmpRole(e.target.value);
  };

  const handleSave = () => {
    if (
      name === "" ||
      dob === "" ||
      empId === "" ||
      deptName === "" ||
      deptId === "" ||
      gender === "" ||
      empRole === ""
    ) {
      alert("Please fill all the details");
    }

    const empData = {
      name,
      dob,
      empId,
      deptId,
      deptName,
      gender,
      empRole,
    };

    dispatch(addEmployees(empData));

    setPopUp(!popUp);
  };

  const buttonStyle = {
    mr: "10px",
    l: "10px",
  };

  return (
    <>
      <Box className={"box"}>
        <TextField
          style={inputStyle}
          id="name"
          label="Employee Name"
          variant="standard"
          placeholder="Enter name"
          onChange={(e) => handleName(e)}
          value={name}
          fullWidth
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            disableFuture
            style={inputStyle}
            label="Date of birth"
            format="dd/MM/yyyy"
            value={dob}
            onChange={(e) => handleDob(e)}
            fullWidth
          />
        </MuiPickersUtilsProvider>

        <TextField
          style={inputStyle}
          id="empId"
          label="Employee Id"
          variant="standard"
          placeholder="Enter employee id"
          onChange={(e) => handleEmpId(e)}
          value={empId}
          fullWidth
        />

        <TextField
          style={inputStyle}
          id="deptId"
          label="Department Id"
          variant="standard"
          placeholder="Enter department id "
          onChange={(e) => handleDeptId(e)}
          value={deptId}
          fullWidth
        />

        <TextField
          style={inputStyle}
          id="deptName"
          label="Department Name"
          variant="standard"
          placeholder="Enter department name"
          onChange={(e) => handleDeptName(e)}
          value={deptName}
          fullWidth
        />

        <TextField
          style={inputStyle}
          id="gender"
          label="Gender"
          variant="standard"
          placeholder="Enter gender"
          onChange={(e) => handleGender(e)}
          value={gender}
          fullWidth
        />

        <TextField
          style={inputStyle}
          id="empRole"
          label="Employee Role"
          variant="standard"
          placeholder="Enter Employee Role"
          value={empRole}
          onChange={(e) => handleEmpRole(e)}
          fullWidth
        />
        <Button
          color="success"
          style={buttonStyle}
          variant="contained"
          onClick={handleSave}
        >
          Save
        </Button>
      </Box>
    </>
  );
};

export default Addemployeeform;
