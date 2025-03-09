import React from "react";
import "../styles.css";

const Footer = () => {
return (
    <footer className="footer">
        <p>© 2025 SQI College. All rights reserved.</p>
        <div style={{ display: "flex", gap: "10px" }}>
            <a href="https://facebook.com">Facebook</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://linkedin.com">LinkedIn</a>
        </div>
    </footer>
);
};

export default Footer;
