import { serverBaseURL, endpoints } from "../const";
import axios from "axios";

function deleteEmpDetails(empId, callback) {
  const baseURLString = serverBaseURL;
  const deleteEmpendpoint = endpoints.deleteEmployee(empId);

  const baseURL = new URL(baseURLString);
  const finalURL = new URL(deleteEmpendpoint, baseURL);

  axios
    .delete(finalURL.toString())
    .then((response) => {
      setTimeout(() => {
        callback(undefined, response);
      }, 100);
      
    })
    .catch((err) => {
      callback(err, undefined);
      console.error(err);
    });
}

export default deleteEmpDetails;
