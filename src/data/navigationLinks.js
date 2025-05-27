import { faHistory,faCalendar,faNotesMedical,
  faChartBar,
  faComments,
  faLifeRing,
  faCog,faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
export const navLinks = [
  { name: "Dashboard", icon: faTachometerAlt, section: "top" },
  { name: "History", icon: faHistory, section: "top" },
  { name: "Calendar", icon: faCalendar, section: "top" },
  { name: "Appointments", icon: faNotesMedical, section: "top" },
  { name: "Statistics", icon: faChartBar, section: "top" },

  { name: "Chat", icon: faComments, section: "bottom" },
  { name: "Support", icon: faLifeRing, section: "bottom" },
  { name: "Settings", icon: faCog, section: "bottom" },
];
