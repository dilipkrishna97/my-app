import React, { useState } from "react";
import _  from "lodash"
import Header from "../Header";
import DepartmentsList from "../DepartmentsList"
import "./style.css";
import themeContext from "../../context/themeContext";
import { useSelector } from "react-redux";
import DeptDetailsDisplay from "../DeptDetailsDisplay";
import WelcomePage from "../WelcomePage";

const DashBoard = () => {
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
          <DepartmentsList />
          {!_.isEmpty(selectedDept) ? (
            <div
              className={
                theme ? "display dark-display" : "display light-display"
              }
            >
              <DeptDetailsDisplay />
            </div>
          ) : (
            <div
              className={
                theme ? "display2 dark-display2" : "display2 light-display2"
              }
            >
              <WelcomePage />
            </div>
          )}
        </div>
      </div>
    </themeContext.Provider>
  );
};

export default DashBoard;
