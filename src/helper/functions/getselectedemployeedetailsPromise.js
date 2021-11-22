import { serverBaseURL, endpoints } from "../../const";

const getselectedemployeedetailsPromise = (deptId) => {
  const baseURLString = serverBaseURL;
  const dptEmpendpoint = endpoints.getDepartmentEmployee(deptId);

  const baseURL = new URL(baseURLString);
  const finalURL = new URL(dptEmpendpoint,baseURL);
  
  return fetch(finalURL.toString(), {
    method: "GET",
  });
};

export default getselectedemployeedetailsPromise;
