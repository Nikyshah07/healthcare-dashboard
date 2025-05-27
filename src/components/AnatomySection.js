import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { healthCards } from "../data/healthData";
import { faArrowRight, faUpDown } from "@fortawesome/free-solid-svg-icons";
import humanimage from "../assets/humanbody.png"; // image of human anatomy

//showing a dashboard with anatomy-related health data
const AnatomySection = () => (
  <section className="anatomy-section">
    <div className="dashboardData">
      <div>
        <h1>Dashboard</h1>
      </div>
      <div>
        <p style={{ color: "#b7b6c7", fontWeight: "600" }}>
          This week <FontAwesomeIcon icon={faUpDown} />
        </p>
      </div>
    </div>

 
    <div className="dashboardImageData">
      <div className="imagediv">
        <img src={humanimage} alt="Human Anatomy" className="anatomy-image" />
      </div>

      <div className="imagedata">
        <ul className="health-card">

          {/* loop over each health data card */}
          {healthCards.map((item, i) => (
            <li key={i} className="card-item">

              {/* title with icon (color depends on title) */}
              <div className="card-title" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }} >
                <FontAwesomeIcon icon={ item[
                      item.title === "Lungs"
                        ? "faLungs"
                        : item.title === "Teeth"
                        ? "faTeeth"
                        : "faBone"
                    ]
                  }
                  style={{
                    color: item.title === "Lungs" ? "#EF4444" : "#e9e0d4",
                  }}
                  className="health-icon"
                />
                {item.title}
              </div>

              <div className="card-date">Date: {item.date}</div>
              <div className="card-bar-container">

                 {/* colored bar to represent health progress */}
                <div
                  className="card-bar"
                  style={{
                    backgroundColor:
                      item.title === "Lungs"
                        ? "#EF4444"
                        : item.title === "Teeth"
                        ? "#10B981"
                        : "#F59E0B",
                    width: "80%",
                    height: "6px",
                    borderRadius: "4px",
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="detail">
      <p>Details</p>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  </section>
);

export default AnatomySection;
