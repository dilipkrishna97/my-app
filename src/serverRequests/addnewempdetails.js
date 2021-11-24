import axios from "axios";

function addNewEmpdetails(empDetails, callback) {

  const newEmployeeDetails = {
    name: empDetails.name,
    dob: empDetails.dob,
    empId: empDetails.empId,
    deptId: empDetails.deptId,
    deptName: empDetails.deptName,
    gender: empDetails.gender,
    empRole: empDetails.empRole,
  };

  axios
    .post("http://localhost:8080/employee", newEmployeeDetails)
    .then((response) => {
      setTimeout(() => {
        callback(undefined, response);
      }, 300);
      
    })
    .catch((err) => {
      console.log(err);
      callback(err, undefined);
    });
}

export default addNewEmpdetails;
