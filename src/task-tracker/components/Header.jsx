
import { useLocation } from "react-router-dom";

const Header = ({ toggle_form, showForm ,delete_them_all}) => {
  const location = useLocation();
  return (
    <header
      className={`header ${location.pathname === "/" ? "container" : ""}`}
    >
      <h1>Task Tracker</h1>
      <div className="header_btns">
      {location.pathname === "/" && (
        <button className={`btn-boot-reset`} onClick={toggle_form}>
          {showForm ? "×" : "+"}
        </button>
      )}
        <button className='btn-reset' onClick={delete_them_all}>💨

        </button>
      </div>
    </header>
  );
};
export default Header;
