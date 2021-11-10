import React, { useState, useEffect } from "react";
import Details from "../Detailsdisplay";
import "./style.css"
import Form from "../Form";
import { deleteEmployee } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Display = (props) => {
  const [data, setData] = useState(null);
  const [popUp, setPopUp] = useState(false);
  const [select, setSelect] = useState("ID");
  const [search, setSearch] = useState("");
  const empList = useSelector((state) => state.empList);
  const dispatch = useDispatch();
  const { department } = props;
  const deptEmpList = empList.filter((list) => list.deptId === department.id);

  useEffect(() => {
    setData(null)
  }, [department]);

  useEffect(() => {
    setSelect("ID")
  }, [department]);

  useEffect(() => {
    setSearch("")
  }, [department]);

  const managePopUp = () => {
    setPopUp(true);
  };

  const handleDelete = (empId) => {
    dispatch(deleteEmployee(empId));
  };

  const handleSelect = (e) => {
    if(e.target.value === "ID"){setSelect("ID");}
    else if(e.target.value === "Name"){setSelect("Name");}
    else if(e.target.value === "Role"){setSelect("Role");}
    else if(e.target.value === "Gender"){setSelect("Gender");}
    else if(e.target.value === "DOB"){setSelect("DOB");}
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
        <form>
          <select className="dropDown" value={select} onChange={(e) => handleSelect(e)}>
            <option value="ID">ID</option>
            <option value="Name">Name</option>
            <option value="Role">Role</option>
            <option value="Gender">Gender</option>
            <option value="DOB">DOB</option>
          </select>
          <input className="search" placeholder="Enter here" value={search} onChange={(e) => {setSearch(e.target.value)} } />
        </form>
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
              {deptEmpList.filter((emp) => {if(search === ""){
                return emp;
              }else if(select === "Name"){if(emp.name.toLowerCase().includes(search.toLowerCase()) ){
                return emp;
              }}
              else if(select === "ID"){if(emp.empId.toLowerCase().includes(search.toLowerCase()) ){
                return emp;
              }}
              else if(select === "Role"){if(emp.empRole.toLowerCase().includes(search.toLowerCase()) ){
                return emp;
              }}
              else if(select === "Gender"){if(emp.gender.toLowerCase().includes(search.toLowerCase()) ){
                return emp;
              }}
              else if(select === "DOB"){if(emp.dob.toLowerCase().includes(search.toLowerCase()) ){
                return emp;
              }}
            }).map((emp) => {
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
