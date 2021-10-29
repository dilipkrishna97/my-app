import "./style.css";
import themeContext from "./context";
import { useContext } from "react";

const Welcome = () => {
  const theme = useContext(themeContext);

  return (
    <div>
      <h2>WELCOME SOFT SUAVE TECHNOLOGIES PVT LTD. </h2>
    </div>
  );
};

export default Welcome;
