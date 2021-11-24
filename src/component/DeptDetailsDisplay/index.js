import React, { useState, useEffect, useCallback } from "react";
import EmployeesDetailsDisplay from "../EmployeesDetailsDisplay";
import "./style.css";
import AddEmployeeForm from "../AddEmployeeForm";
import { deleteEmployee } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import convertQueryStringToObject from "../../helper/functions/convertQueryStringToObject";
import LabelValue from "../LabelValue";
import DropDown from "../DropDown";
import { dropDownOptionList } from "../../const";
import { Button, Modal } from "@mui/material";
import deleteEmpDetails from "../../serverRequests/deleteEmpDetails";
import getSelectedEmpDetailsPromise from "../../serverRequests/getSelectedEmpDetailsPromise";
import ServiceRequestProgress from "../ServiceRequestProgress";

const DeptDetailsDisplay = () => {
  const [data, setData] = useState(null);
  const [deleteEmp, setDeleteEmp] = useState(true);
  const [employeeListS, setEmployeeList] = useState([]);
  const [openAddEmpFormModal, setOpenAddEmpFormModal] = useState(false);
  const [select, setSelect] = useState("ID");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(0);
  const selectedDept = useSelector((state) => state.selectedDept);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const handleDelete = (empId) => {
    setDeleteEmp(true);
    dispatch(deleteEmployee(empId));
    deleteEmpDetails(empId, (err, response) => {
      if (!err) {
        setDeleteEmp(false);
      }
    });
  };

  const getEmployees = useCallback(
    async (callback) => {
      const response = await getSelectedEmpDetailsPromise(
        selectedDept.id,
        setLoading
      );
      callback(response.data);
    },
    [selectedDept, deleteEmp, openAddEmpFormModal]
  );

  useEffect(() => {
    updateFilterUsingQueryString();
  }, []);

  useEffect(() => {
    getEmployees((employeeList) => {
      setEmployeeList(employeeList.data);
    });
  }, [getEmployees]);

  const handleCloseAddEmpModal = () => {
    setOpenAddEmpFormModal(!openAddEmpFormModal);
  };

  const locationQueryParam = location.search;

  const updateQueryString = (properties) => {
    const currentQueryString = locationQueryParam;

    const selectedColumnName = properties?.selectedColumnName || select;
    const searchText = properties?.searchText ?? search;

    if (!currentQueryString) return;
    // substring(1) is performed to remove ? which at the beigining
    const updatedQueryString = currentQueryString.substring(1);
    const queryStringObj = convertQueryStringToObject(updatedQueryString);

    const selectedDeptId = queryStringObj?.deptId || "";

    const params = new URLSearchParams();

    params.append("deptId", selectedDeptId);
    params.append("coloumn", selectedColumnName);
    params.append("searchItem", searchText);

    const newQueryString = params.toString();
    history.push({ search: newQueryString });
  };

  const updateFilterUsingQueryString = () => {
    const currentQueryString = locationQueryParam;

    if (!currentQueryString) return;
    // substring(1) is performed to remove ? which at the beigining
    const updatedQueryString = currentQueryString.substring(1);
    const queryStringObj = convertQueryStringToObject(updatedQueryString);

    const filterSelectedColumn = queryStringObj?.coloumn || "";
    const filterEnteredTxt = queryStringObj?.searchItem || "";

    setSelect(filterSelectedColumn);
    setSearch(filterEnteredTxt);
  };

  useEffect(() => {
    // triggered when department is changing
    updateFilterUsingQueryString();
  }, [locationQueryParam]);

  useEffect(() => {
    setData(null);
    setEmployeeList([]);
  }, [selectedDept]);

  useEffect(() => {
    setLoading(true);
  }, [selectedDept, openAddEmpFormModal]);

  const handleEmpAddform = () => {
    setOpenAddEmpFormModal(true);
  };

  const handleSelect = (onSelectChnages) => {
    const columnName = onSelectChnages.target.value;

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

    updateQueryString({ selectedColumnName: select, searchText: "" });
  };

  const emplyeeNo = Object.keys(employeeListS).length;

  return (
    <>
      {loading < 100 ? (
        <ServiceRequestProgress />
      ) : (
        <div>
          <LabelValue label={"Department Id: "} value={selectedDept?.id} />
          <LabelValue
            label={"Department Manager: "}
            value={selectedDept?.manager}
          />
          <LabelValue label={"Number of Employees: "} value={emplyeeNo} />
          <div>
            <b>List of Employees: </b>
            <Button
              color="success"
              variant="contained"
              onClick={handleEmpAddform}
            >
              Add Employee
            </Button>
            <br />
            <br />
          </div>
          <div>
            <form>
              <DropDown
                value={select}
                onSelectChanges={handleSelect}
                list={dropDownOptionList}
              />
              <input
                className="search"
                placeholder="Enter here"
                value={search}
                onChange={(e) => {
                  const value = e.target.value;
                  setSearch(value);
                  updateQueryString({ searchText: value });
                }}
              />
            </form>
          </div>
          <div>
            {employeeListS && (
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
                  {employeeListS
                    .filter((emp) => {
                      if (search === "") {
                        return emp;
                      } else if (select === "Name") {
                        if (
                          emp.name.toLowerCase().includes(search.toLowerCase())
                        ) {
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
                          emp.empRole
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          return emp;
                        }
                      } else if (select === "Gender") {
                        if (
                          emp.gender
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          return emp;
                        }
                      } else if (select === "DOB") {
                        if (
                          emp.dob.toLowerCase().includes(search.toLowerCase())
                        ) {
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
            <EmployeesDetailsDisplay
              employeeData={employeeListS}
              selectedDeptId={data.deptId}
              selectedEmpId={data.empId}
            />
          )}
        </div>
      )}

      <Modal open={openAddEmpFormModal} onClose={handleCloseAddEmpModal}>
        <div className="addEmployeeformContainer">
          <AddEmployeeForm
            openAddEmpFormModal={openAddEmpFormModal}
            setOpenAddEmpFormModal={setOpenAddEmpFormModal}
            depart={selectedDept}
          />
        </div>
      </Modal>
    </>
  );
};

export default DeptDetailsDisplay;
