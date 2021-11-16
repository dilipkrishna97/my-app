import React, { useState } from "react";
import _  from "lodash"
import Header from "../Header";
import DepartmentList from "../Departmentslist";
import "./style.css";
import themeContext from "../../context/themeContext";
import { useSelector } from "react-redux";
import Departmentdetailsdisplay from "../Departmentdetailsdisplay";
import Welcomepage from "../Welcomepage";

const Dashboard = () => {
  const [theme, setTheme] = useState(true);
  const selectedDept = useSelector((state) => state.selectedDept);

  const handleDarkTheme = () => {
    setTheme(true);
  };

  const handleLightTheme = () => {
    setTheme(false);
  };

  return (
    <themeContext.Provider value={theme}>
      <div className="App">
        <button onClick={() => handleDarkTheme()}> Dark </button>
        <button onClick={() => handleLightTheme()}> Light </button>
        <Header />
        <div id="appss">
          <DepartmentList />
          {!_.isEmpty(selectedDept) ? (
            <div
              className={
                theme ? "display dark-display" : "display light-display"
              }
            >
              <Departmentdetailsdisplay />
            </div>
          ) : (
            <div
              className={
                theme ? "display2 dark-display2" : "display2 light-display2"
              }
            >
              <Welcomepage />
            </div>
          )}
        </div>
      </div>
    </themeContext.Provider>
  );
};

export default Dashboard;
