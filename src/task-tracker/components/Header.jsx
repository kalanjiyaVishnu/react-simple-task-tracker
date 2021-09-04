import { Link } from "react";
const Header = ({ toggle_form, showForm }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <button className={`btn-boot-reset`} onClick={toggle_form}>
        {showForm ? "×" : "+"}
      </button>
    </header>
  );
};
export default Header;
