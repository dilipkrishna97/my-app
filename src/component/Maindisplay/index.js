import React, { useState, useEffect } from "react";
import Details from "../Detailsdisplay";
import "./style.css";
import Form from "../Form";
import { deleteEmployee } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import convertQueryStringToObject from "../../helper/functions/convertQueryStringToObject";

const Maindisplay = (props) => {
  const [data, setData] = useState(null);
  const [popUp, setPopUp] = useState(false);
  const [select, setSelect] = useState("ID");
  const [search, setSearch] = useState("");
  const empList = useSelector((state) => state.empList);
  const dispatch = useDispatch();
  const { department } = props;
  const deptEmpList = empList.filter((list) => list.deptId === department.id);
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams();

  const locationQueryParam = location.search;

  const updateQueryString = (properties) => {
  
    const selectedColumnName = properties?.selectedColumnName||select;
    const searchText = properties?.searchText||search;

    const currentQueryString = location?.search;
    const isCurQueryStringIsEmpty = !currentQueryString;
    if (isCurQueryStringIsEmpty) return;
    // substring(1) is performed to remove ? which at the beigining
    const updatedQueryString = currentQueryString.substring(1);
    const departmentId = convertQueryStringToObject(updatedQueryString);

    const selectedDeptId = departmentId?.deptId || "";
    
    params.append("deptId", selectedDeptId);
    params.append("coloumn", selectedColumnName);
    params.append("searchItem", searchText);

    const newQueryString = params.toString();
    history.push({ search: newQueryString });
  };

  useEffect(() => {
    updateQueryString();
  }, [locationQueryParam]);

  useEffect(() => {
    setData(null);
  }, [department]);

  useEffect(() => {
    setSelect("ID");
  }, [department]);

  useEffect(() => {
    setSearch("");
  }, [department]);

  const managePopUp = () => {
    setPopUp(true);
  };

  const handleDelete = (empId) => {
    dispatch(deleteEmployee(empId));
  };

  const handleSelect = (e) => {

    const columnName = e.target.value;

    if (columnName === "ID") {
      setSelect("ID");
    } else if (columnName === "Name") {
      setSelect("Name");
    } else if (columnName === "Role") {
      setSelect("Role");
    } else if (columnName === "Gender") {
      setSelect("Gender");
    } else if (columnName === "DOB") {
      setSelect("DOB");
    }

    updateQueryString({selectedColumnName:columnName});

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
          <select
            className="dropDown"
            value={select}
            onChange={(e) => handleSelect(e)}
          >
            <option value="ID">ID</option>
            <option value="Name">Name</option>
            <option value="Role">Role</option>
            <option value="Gender">Gender</option>
            <option value="DOB">DOB</option>
          </select>
          <input
            className="search"
            placeholder="Enter here"
            value={search}
            onChange={(e) => {
              const value = e.target.value
              setSearch(value);
              updateQueryString({searchText:value});
            }}
          />
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
              {deptEmpList
                .filter((emp) => {
                  if (search === "") {
                    return emp;
                  } else if (select === "Name") {
                    if (emp.name.toLowerCase().includes(search.toLowerCase())) {
                      return emp;
                    }
                  } else if (select === "ID") {
                    if (
                      emp.empId.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return emp;
                    }
                  } else if (select === "Role") {
                    if (
                      emp.empRole.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return emp;
                    }
                  } else if (select === "Gender") {
                    if (
                      emp.gender.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return emp;
                    }
                  } else if (select === "DOB") {
                    if (emp.dob.toLowerCase().includes(search.toLowerCase())) {
                      return emp;
                    }
                  }
                })
                .map((emp) => {
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

export default Maindisplay;
