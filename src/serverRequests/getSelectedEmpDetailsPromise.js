import axios from "axios";
import { serverBaseURL, endpoints } from "../const";
import progressDisplay from "../helper/functions/progressDisplay";

const getSelectedEmpDetailsPromise = (deptId, setLoading) => {
  const baseURLString = serverBaseURL;
  const dptEmpendpoint = endpoints.getDepartmentEmployee(deptId);

  const baseURL = new URL(baseURLString);
  const finalURL = new URL(dptEmpendpoint, baseURL);

  return axios.get(finalURL.toString(), {
    onDownloadProgress: (progressEvent) => {
      progressDisplay(progressEvent, setLoading);
    },
  });
};

export default getSelectedEmpDetailsPromise;
