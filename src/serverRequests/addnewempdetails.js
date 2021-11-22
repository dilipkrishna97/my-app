
function addnewempdetails(empDetails,callback) {
  let newEmployeeDetails = `{
    "name": "${empDetails.name}",
    "dob": "${empDetails.dob}",
    "empId": "${empDetails.empId}",
    "deptId": "${empDetails.deptId}",
    "deptName": "${empDetails.deptName}",
    "gender": "${empDetails.gender}",
    "empRole": "${empDetails.empRole}"
  }`;

  fetch("http://localhost:8080/employee", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": newEmployeeDetails,
  })
  .then(response => {
    console.log(response);
    callback(undefined,response)
  })
  .catch(err => {
    console.error(err);
    callback(err,undefined)
  });
}

export default addnewempdetails;
