import React from "react";
import "../styles.css";

const AlumniSection = () => {
    return (
        <div>
            <div className="alumni">
                <div>
                    <div>
                        <div>
                            <h2 style={{ textAlign: "left", fontSize: "26px", color: "#333", paddingBottom: "10px" }}>
                                Our alumni work at world-class companies around the world including
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="logos">
                <div className="google">
                    <div>
                        <span>
                            <img src="/images/google.png" alt="" />
                        </span>
                    </div>
                </div>
                <div className="Interswitch">
                    <div>
                        <span>
                            <img src="/images/Interswitch.png" alt="" />
                        </span>
                    </div>
                </div>
                <div className="Andela">
                    <div>
                        <span>
                            <img src="/images/Andela-log-landscape-blue-400px.png" alt="" />
                        </span>
                    </div>
                </div>
                <div>
                    <div>
                        <span>
                            <img src="/images/Microsoft_logo.png" alt="" />
                        </span>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default AlumniSection;
