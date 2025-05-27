// Import FontAwesome icons and components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import Rightheader from "./Rightheader";
import "../styles/AppLayout.css";

// Header component receives toggleSidebar and windowWidth as props
const Header = ({ toggleSidebar, windowWidth }) => (
  <header className="header">
    <div className="headerdata">
      <div className="menu-btn" style={{ display: windowWidth <= 1500 ? "block" : "none" }}>
        <FontAwesomeIcon icon={faBars} size="lg" onClick={toggleSidebar} />
      </div>
      <div className="text">
        <h2><span style={{ color: "#2fcfd7" }}>Health</span>care.</h2>
      </div>

      {/* Search bar with left search icon and right bell icon */}
      <div className="input-wrapper">
        <FontAwesomeIcon icon={faSearch} className="input-icon-left" />
        <input type="text" placeholder="Search..." className="search-bar" />
        <FontAwesomeIcon icon={faBell} className="input-icon-right" />
      </div>
    </div>

    {/* Right side of header: contains user profile icons (from Rightheader component) */}
    <div className="mainRightHeader">
      <Rightheader />
    </div>
  </header>
);

export default Header;
