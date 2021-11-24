import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import { departments } from "../../const";
import themeContext from "../../context/themeContext";
import { useHistory, useLocation } from "react-router-dom";
import convertQueryStringToObject from "../../helper/functions/convertQueryStringToObject";
import { departClicked } from "../../redux/action";
import { useDispatch } from "react-redux";

const DepartmentsList = () => {
  const [selectedDept, setSelectedDept] = useState(null); 
  const theme = useContext(themeContext);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const updateDepatmentUsingQueryString = () => {
    const currentQueryString = location?.search;

    if (!currentQueryString) return;
    // substring(1) is performed to remove ? which at the beigining
    const updatedQueryString = currentQueryString.substring(1);
    const updateQueryStrObj = convertQueryStringToObject(updatedQueryString);

    const departmentId = updateQueryStrObj?.deptId || "";

    const selectedDepartmentObject = departments.find(
      (dep) => dep.id === departmentId
    );

    if (!selectedDepartmentObject) return;

    setSelectedDept(selectedDepartmentObject);
  };

  useEffect(() => {
    // executing here is simillar as executing in componentDidMount of a class component.
    updateDepatmentUsingQueryString();
  }, []);

  const updateDeptInQueryString = (deptId) => {
    const params = new URLSearchParams();
    params.append("deptId", deptId);
    history.push({ search: params.toString() });
  };

  const onDeptClick = (dept) => {
    setSelectedDept(dept);
    updateDeptInQueryString(dept.id);
    dispatch(departClicked(dept));
  };

  return (
    <div className="left">
      <div className={theme ? "sidebar dark-sidebar" : "sidebar light-sidebar"}>
        <h2> DEPARTMENTS </h2>
        <ul className={theme ? "list dark-list" : "list light-list"}>
          {departments.map((dept) => {
            return (
              <li
                className={
                  theme
                    ? selectedDept?.id === dept.id
                      ? "dept-list dark-dept-list dept-active dark-dept-active"
                      : "dept-list dark-dept-list"
                    : selectedDept?.id === dept.id
                    ? "dept-list light-dept-list dept-active light-dept-active"
                    : "dept-list light-dept-list"
                }
                onClick={() => onDeptClick(dept)}
              >
                {dept.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DepartmentsList;
