import "./style.css";
import themeContext from "../../context/themeContext";
import { useContext } from "react";

const Header = () => {
  const theme = useContext(themeContext);

  return (
    <div className={theme ? "header dark-header" : "header light-header"}>
      <header>
        <h2> SOFT SUAVE TECHNOLOGIES PVT LTD. </h2>
        <div>
          <b> DASHBOARD </b>
        </div>
      </header>
    </div>
  );
};

export default Header;
