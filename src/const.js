export const departments = [
  {
    name: "HR Department",
    id: "111",
    manager: "Rakesh",
    noOfEmployees: "4",
  },
  {
    name: "Technical Department",
    id: "222",
    manager: "Jacob",
    noOfEmployees: "4",
  },
  {
    name: "Business Development Department",
    id: "333",
    manager: "Rao",
    noOfEmployees: "4",
  },
  {
    name: "IT Department",
    id: "444",
    manager: "Kevin",
    noOfEmployees: "4",
  },
  {
    name: "Marketing Department",
    id: "555",
    manager: "Peter",
    noOfEmployees: "4",
  },
  {
    name: "Finance Department",
    id: "666",
    manager: "Jenny",
    noOfEmployees: "4",
  },
  {
    name: " Sales Department",
    id: "777",
    manager: "Samuel",
    noOfEmployees: "4",
  },
];

export const dropDownOptionList = [
  {
    option: "ID",
  },
  {
    option: "Name",
  },
  {
    option: "Role",
  },
  {
    option: "Gender",
  },
  {
    option: "DOB",
  },
];

export const serverBaseURL = "http://localhost:8080";

export const endpoints = {
  employees: () => {
    return "employee";
  },
  getDepartmentEmployee: (deprtmentId) => {
    return `employee/department/${deprtmentId}`;
  },
  getDepartment: () => {
    return `department`;
  },
  deleteEmployee: (empId) => {
    return `employee?empId=${empId}`
  }
};
