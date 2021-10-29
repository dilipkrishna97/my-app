import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import themeContext from "./context/themeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(true);

  const handleDarkTheme = () => {
    setTheme(true);
  };

  const handleLightTheme = () => {
    setTheme(false);
  };

  console.log(theme);

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
}

export default App;
