import { Link } from "react";
import { useLocation } from "react-router-dom";

const Header = ({ toggle_form, showForm }) => {
  const location = useLocation();
  return (
    <header
      className={`header ${location.pathname === "/" ? "container" : ""}`}
    >
      <h1>Task Tracker</h1>
      {location.pathname === "/" && (
        <button className={`btn-boot-reset`} onClick={toggle_form}>
          {showForm ? "×" : "+"}
        </button>
      )}
    </header>
  );
};
export default Header;
