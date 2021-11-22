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
      console.log(response);
      if(response.status == 200){
        setDelete(false);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

export default deleteempdetails;
