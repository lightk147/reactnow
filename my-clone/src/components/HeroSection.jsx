import React from "react";
import "../styles.css";

const HeroSection = () => {
  return (
    <div style={{ margin: 0, padding: 0, boxSizing: "border-box" }}>
      <div
        className="first-div"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div className="v" style={{ flex: 1, padding: "20px" }}>
          <div
            className="studybox"
            style={{
              backgroundColor: "#f0f0f0",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <div className="Study" style={{ marginBottom: "15px" }}>
              <h1 style={{ fontSize: "2em", color: "#333" }}>
                Study to become a global talent
              </h1>
            </div>
            <div>
              <div className="learn">
                <div className="text">
                  <p style={{ fontSize: "1.1em", color: "#555" }}>
                    Learn new tech skills using a world-class curriculum from
                    top industry experts in an accredited institution.
                  </p>
                </div>
              </div>
            </div>
            <div className="box" style={{ marginTop: "20px" }}>
              <a
                href="#"
                className="button"
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
        <div
          className="column"
          style={{ flex: 1, textAlign: "center", padding: "20px" }}
        >
          <span className="img">
            <img
              src="bg-header-sqi-1.png"
              alt=""
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
