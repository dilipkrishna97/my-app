import { ADD_EMPLOYEES, DELETE_EMPLOYEE } from "./actionType";

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
