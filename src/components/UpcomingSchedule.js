import React from "react";
import { upcomingSchedule } from "../data/upcomingSchedule";

// Import the reusable appointment card component
import SimpleAppointmentCard from "./SimpleAppoinmentCard";

const UpcomingSchedule = () => {
  // Define colors for each appointment type
  const getIconColor = (title) => {
    switch (title.toLowerCase()) {
      case "health checkup complete":
        return "#ff6b6b"; //red/pink color
      case "cardiologist":
        return "#ff6b6b"; //red color
      default:
        return "#6c63ff"; //default purple
    }
  };

  return (
    <section className="upcoming-schedule">
      {/* Loop through the groups of upcoming schedules (e.g., for each day) */}
      {upcomingSchedule.map((group, i) => (
        <div key={i}>
          <div>
            <h1>{group.title}</h1>
          </div>
          <div className="days">
            <p>{group.day}</p>
          </div>
          <div className="appointment-data">

            {/* Render appointment cards using the reusable component */}
            <SimpleAppointmentCard
              appointments={group.appointments}
              getIconColor={getIconColor}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default UpcomingSchedule;
