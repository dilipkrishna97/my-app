import React, { useState, useContext } from "react";
import "./style.css";
import Display from "../Maindisplay";
import Welcome from "../Welcomepage";
import { departments } from "../../const";
import themeContext from "../../context/themeContext";

const Sidebar = () => {
  const [selectedDept, setDept] = useState(null);
  const theme = useContext(themeContext);

  const onDeptClick = (dept) => {
    if (dept) {
      setDept(dept);
    }
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
                onClick={(e) => onDeptClick(dept)}
              >
                {dept.name}
              </li>
            );
          })}
        </ul>
      </div>
      {selectedDept ? (
        <div
          className={theme ? "display dark-display" : "display light-display"}
        >
          <Display department={selectedDept} />
        </div>
      ) : (
        <div
          className={
            theme ? "display2 dark-display2" : "display2 light-display2"
          }
        >
          <Welcome />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
