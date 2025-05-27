import React from "react";

// Import mock chart data (heights, colors, days)
import { chartData } from "../data/chartdata";
import "../styles/activity.css";
const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3>Activity</h3>
        <p className="appointment-count">3 appointments on this week</p>
      </div>

      {/* Create bar chart */}
      <div className="bar-chart">
        <div className="chart-container">

           {/* Loop through chart data and render each bar */}
          {chartData.map((data, index) => (
            <div key={index} className="bar-wrapper">

              {/* Each bar has a dynamic height and color from mock data */}
              <div
                className="bar"
                style={{
                  height: `${data.height}px`,
                  backgroundColor: data.color,
                }}
              ></div>
              <span className="day-label">{data.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
