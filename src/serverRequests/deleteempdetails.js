import { serverBaseURL, endpoints } from "../const";

function deleteempdetails(empId, setDelete) {
  const baseURLString = serverBaseURL;
  const deleteEmpendpoint = endpoints.deleteEmployee(empId);

  const baseURL = new URL(baseURLString);
  const finalURL = new URL(deleteEmpendpoint, baseURL);
  fetch(finalURL.toString(), {
    method: "DELETE",
    headers: {},
  })
    .then((response) => {
      if(response.ok){
        return setDelete(false);
      }
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

export default deleteempdetails;
