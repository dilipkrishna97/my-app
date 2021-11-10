import { ADD_EMPLOYEES, DELETE_EMPLOYEE, ADD_USER } from "./actionType";

export const addEmployees = (allEmpData) => {
  return {
    type: ADD_EMPLOYEES,
    payLoad: allEmpData || {},
  };
};

export const deleteEmployee = (empId) => {
  return {
    type: DELETE_EMPLOYEE,
    employeeId: empId,
  };
};

export const addUser = (userDetails) => {
  return {
    type: ADD_USER,
    payLoad: userDetails || {},
  };
};
