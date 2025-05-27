import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// This component receives a list of appointments and a function to get icon color
const SimpleAppointmentCard = ({ appointments, getIconColor }) => {
  return (
    <>
    {/* Loop through each appointment and render it */}
      {appointments.map((appt, j) => (
        <div key={j} className="upcoming-data">
          <div className="upcoming-data1">
            <h3>{appt.title}</h3>
            <FontAwesomeIcon
              icon={appt.icon}
              className="icon"
              style={{ color: getIconColor(appt.title) }}
            />
          </div>
          <p>{appt.time}</p>
        </div>
      ))}
    </>
  );
};

export default SimpleAppointmentCard;
