import React from "react";
import "../styles.css";

const Header = () => {
return (
    <header>
        <nav className="navbar">
                                    <div className="left">
                                            <img src="/images/co.jpg" alt="" style={{width: '100px', height: 'auto'}}/>
                                    </div>
                                    <div className="right">
                                            <ul className="list">
                                                    <li><a href="">About</a></li>
                                                    <li><a href="">Programmes</a></li>
                                                    <li><a href="">Admissions</a></li>
                                                    <li><a href="">E-portal </a></li>
                                                    <li><a href="">SQI Scholarships </a></li>
                                                    <li><a href="">News</a></li>
                                            </ul>
                                    </div>
                    </nav>
    </header>
);
}

export default Header;