import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "../data/navigationLinks";


// Sidebar component that receives props
const Sidebar = ({ closeSidebar, windowWidth }) => {

   // Divide navigation links into 3 sections
  const topLinks = navLinks.slice(0, 5);      // first 5 links for "General"
  const middleLinks = navLinks.slice(5, 7);   // next 2 for "Tools"
  const bottomLinks = navLinks.slice(7);      // remaining for bottom section

  const renderLinks = (links) => (
    <ul className="sidebarLinks">
      {links.map((link, i) => (
        <li key={i}>
          <FontAwesomeIcon icon={link.icon} style={{ marginRight: "20px" }} />
          {link.name}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="sidebar">

       {/* Close button only visible on smaller screens (≤ 1500px) */}
      {windowWidth <= 1500 && (
        <div
          style={{
            alignSelf: "flex-end",
            cursor: "pointer",
            marginBottom: "1rem",
          }}
          onClick={closeSidebar}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </div>
      )}

      <div className="sidebar-content">

         {/* general section */}
        <p style={{ marginTop: "4rem", color: "#e2e5ea" }}>General</p>
        <div>{renderLinks(topLinks)}</div>

         {/* tools section */}
        <p style={{ marginTop: "3rem", color: "#e2e5ea" }}>Tools</p>
        <div>{renderLinks(middleLinks)}</div>

        {/* bottom section */}
        <div style={{ position: "absolute", bottom: 40 }}>
          {renderLinks(bottomLinks)}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
