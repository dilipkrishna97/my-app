import { serverBaseURL, endpoints } from "../../const";

function Deleteempdetails(empId) {
  const baseURLString = serverBaseURL;
  const deleteEmpendpoint = endpoints.deleteEmployee(empId);

  const baseURL = new URL(baseURLString);
  const finalURL = new URL(deleteEmpendpoint, baseURL);
  fetch(finalURL.toString(), {
    method: "DELETE",
    headers: {},
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

export default Deleteempdetails;
