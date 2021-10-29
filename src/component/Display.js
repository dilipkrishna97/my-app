import React, { useState, useEffect, useContext } from "react";
import Details from "./Details";
import Form from "./Form";
import { deleteEmployee } from "../component/Redux/action";
import { useDispatch, useSelector } from "react-redux";
import themeContext from "./context";

const Display = (props) => {
  const [data, setData] = useState(null);
  const [popUp, setPopUp] = useState(false);
  const theme = useContext(themeContext);
  const empList = useSelector((state) => state.empList);
  const dispatch = useDispatch();
  const { department } = props;
  const deptEmpList = empList.filter((list) => list.deptId === department.id);

  useEffect(() => {
    setData(null);
  }, [department]);

  const managePopUp = () => {
    setPopUp(true);
  };

  const handleDelete = (empId) => {
    dispatch(deleteEmployee(empId));
  };

  return (
    <div>
      <div>
        <b>Department Id: </b>
        {department.id} <br />
        <br />
      </div>
      <div>
        <b>Department Name: </b>
        {department.name}
        <br />
        <br />
      </div>
      <div>
        <b>Department Manager: </b>
        {department.manager}
        <br />
        <br />
      </div>
      <div>
        <b>Number of Employees: </b>
        {Object.keys(deptEmpList).length}
        <br />
        <br />
      </div>
      <div>
        <b>List of Employees: </b>
        <button onClick={() => managePopUp()}> Add Employees </button>
        <br />
        <br />
      </div>
      <div>
        {popUp && (
          <Form popUp={popUp} setPopUp={setPopUp} departId={department.id} />
        )}
      </div>
      <div>
        {deptEmpList && (
          <table id="table">
            <thead>
              <tr>
                <th id="head"> ID</th>
                <th id="head"> Name</th>
                <th id="head"> Role</th>
                <th id="head"> Gender</th>
                <th id="head"> DOB</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {deptEmpList.map((emp) => {
                return (
                  <tr id="cell" onClick={() => setData(emp)}>
                    <td> {emp.empId} </td>
                    <td> {emp.name} </td>
                    <td> {emp.empRole} </td>
                    <td> {emp.gender} </td>
                    <td> {emp.dob} </td>
                    <td>
                      <button onClick={() => handleDelete(emp.empId)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      {data?.empId && (
        <Details selectedDeptId={data.deptId} selectedEmpId={data.empId} />
      )}
    </div>
  );
};

export default Display;
