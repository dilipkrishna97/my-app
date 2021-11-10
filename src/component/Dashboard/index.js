import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "./style.css";
import themeContext from "../../context/themeContext";

const Dashboard = () => {
  const [theme, setTheme] = useState(true);

  const handleDarkTheme = () => {
    setTheme(true);
  };

  const handleLightTheme = () => {
    setTheme(false);
  };

  return (
    <themeContext.Provider value={theme}>
      <div className="App">
        <div>
          <button onClick={() => handleDarkTheme()}> Dark </button>
          <button onClick={() => handleLightTheme()}> Light </button>
          <Header />
        </div>
        <div id="appss">
          <Sidebar />
        </div>
      </div>
    </themeContext.Provider>
  );
};

export default Dashboard;
