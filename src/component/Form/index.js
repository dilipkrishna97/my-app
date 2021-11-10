import React, { useState, useContext } from "react";
import "./style.css";
import { addEmployees } from "../../redux/action";
import { useDispatch } from "react-redux";
import themeContext from "../../context/themeContext";

const Form = ({ popUp, setPopUp }) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [empId, setEmpId] = useState("");
  const [deptId, setDeptId] = useState("");
  const [deptName, setDeptName] = useState("");
  const [gender, setGender] = useState("");
  const [empRole, setEmpRole] = useState("");

  const theme = useContext(themeContext);

  const dispatch = useDispatch();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDob = (e) => {
    setDob(e.target.value);
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

  console.log(typeof departId);

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

  const handleClose = () => {
    setPopUp(!popUp);
  };

  return (
    <div
      className={
        theme ? "popup-form dark-popup-form" : "popup-form light-popup-form"
      }
    >
      <div className={theme ? "form dark-form" : "form light-form"}>
        <label className="block"> Employee Name:</label>
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => handleName(e)}
        ></input>
        <br />
        <br />
        <label className="block"> Employee DOB:</label>
        <input type="date" value={dob} onChange={(e) => handleDob(e)}></input>
        <br />
        <br />
        <label className="block"> Employee Id:</label>
        <input
          type="text"
          value={empId}
          onChange={(e) => handleEmpId(e)}
        ></input>
        <br />
        <br />
        <label className="block"> Department Id:</label>
        <input
          type="text"
          value={deptId}
          onChange={(e) => handleDeptId(e)}
        ></input>
        <br />
        <br />
        <label className="block"> Department Name:</label>
        <input
          type="text"
          value={deptName}
          onChange={(e) => handleDeptName(e)}
        ></input>
        <br />
        <br />
        <label className="block"> Gender:</label>
        <input
          type="text"
          value={gender}
          onChange={(e) => handleGender(e)}
        ></input>
        <br />
        <br />
        <label className="block"> Employee Role:</label>
        <input
          type="text"
          value={empRole}
          onChange={(e) => handleEmpRole(e)}
        ></input>
        <br />
        <br />
        <button className="buttons" onClick={() => handleClose()}>
          {" "}
          Close{" "}
        </button>
        <button className="buttons" onClick={() => handleSave()}>
          {" "}
          Save{" "}
        </button>
      </div>
    </div>
  );
};

export default Form;
