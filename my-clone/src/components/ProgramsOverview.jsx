import React from "react";
import "../styles.css";

const ProgramsOverview = () => {
return (
    <div className="gold">
        <div className="first_coln">
            <div className="females">
                <span>
                    <img className="qwert" src="/images/college.jpg" alt="" />
                </span>
            </div>
            <div className="word">
                <div>
                    <h3 className="NID">National Innovative Diploma (NID)</h3>
                </div>
            </div>
            <div>
                <div>
                    <p>
                        The National Innovation Diploma (NID) offered at SQI College of
                        ICT is a 2 year approved academic program of the National Board
                        for Technical Education (NBTE)
                    </p>
                </div>
            </div>
            <div className="learns">
                <a className="learn" href="">
                    Learn More
                </a>
            </div>
        </div>
        <div className="snd_coln">
            <div className="females">
                <span>
                    <img className="qwert" src="/images/prof.jpg" alt="" />
                </span>
            </div>
            <div className="dip">
                <div>
                    <h3>Professional Diploma Certificate</h3>
                </div>
            </div>
            <div>
                <div>
                    <p>
                        The Professional Certificate Program is 1 year practical training
                        with wide range of edge-cutting IT certification courses offered
                        in SQI college of ICT to people who want to advance their career.
                    </p>
                </div>
            </div>
            <div className="learns">
                <a className="learn" href="">
                    Learn More
                </a>
            </div>
        </div>
        <div className="td_coln">
            <div className="females">
                <span>
                    <img className="qwert" src="/images/certificate.jpg" alt="" />
                </span>
            </div>
            <div className="cert">
                <div>
                    <h3>Certificate Program</h3>
                </div>
            </div>
            <div>
                <div>
                    <p>
                        The Certificate Program is a short-term training, 2 weeks to 6
                        months with a wide range of edge-cutting IT certification courses
                        offered in SQI College of ICT to people who want to advance their
                        careers.
                    </p>
                </div>
            </div>
            <div className="learns">
                <a className="learn" href="">
                    Learn More
                </a>
            </div>
        </div>
    </div>
);
};

export default ProgramsOverview;
