import ActivityFeed from "./ActivityFeed";
import AnatomySection from "./AnatomySection";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";

const DashboardMainContent = () => (
  <div className="dashboard-main">

     {/* Left panel: shows human body + activity chart */}
    <div className="left-panel">
      <AnatomySection />
      <ActivityFeed />
    </div>

    {/* Right panel: shows calendar and upcoming appointments */}
    <div className="right-panel">
      <CalendarView />
      <UpcomingSchedule />
    </div>
  </div>
);

export default DashboardMainContent;
