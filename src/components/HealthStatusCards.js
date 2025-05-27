// Import mock health cards data from file
import { healthCards } from "../data/healthData";

const HealthStatusCards = () => (
  <section className="health-status-cards">

    {/* Loop through each health card from the data */}
    {healthCards.map((card, i) => (
      <div
        key={i}
        className={`card ${card.status === "Good" ? "green" : "red"}`}
      >
        <h3>{card.title}</h3>
        <p>Status: {card.status}</p>
      </div>
    ))}
  </section>
);

export default HealthStatusCards;
