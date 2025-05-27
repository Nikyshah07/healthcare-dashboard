//import Hooks and necessary components
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashboardMainContent from "./DashboardMainContent";
import "../styles/AppLayout.css";

const AppLayout = () => {
   // Controls visibility of sidebar
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Track the current window width to handle responsive layout
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="main">
      <Header toggleSidebar={toggleSidebar} windowWidth={windowWidth} />

      <div className="app-layout">
       { /* Sidebar is shown only on large screens OR when toggled on small screens */}
        <div
          className="side-section"
          style={{
            display:
              windowWidth <= 1500
                ? isSidebarVisible
                  ? "block"
                  : "none"
                : "block",
          }}
        >
          <Sidebar
            closeSidebar={() => setIsSidebarVisible(false)}
            windowWidth={windowWidth}
          />
        </div>


       {/* Sidebar component receives closeSidebar function and window width */}
        <div className="main-section">
          <DashboardMainContent />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
