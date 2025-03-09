import React from "react";
import "../styles.css";

const TopCourses = () => {
return (
    <div className="mute">
        <div className="tc2">
            <div className="tc1">
                <div className="top-courses">
                    <div>
                        <h2>Our Top Courses</h2>
                    </div>
                </div>
                <div className="take">
                    <div>
                        <p>Take a look at some of our popular courses</p>
                    </div>
                </div>
                <div className="view">
                    <a href="" className="view-all-courses">
                        View all Courses
                    </a>
                </div>
            </div>
        </div>
        <div className="et_pb_row">
            <div className="et_pb_column">
                <div className="et_pb">
                    <span className="et_soft">
                        <img
                            className="soft"
                            src="/images/software-engineering-630x330-1.webp"
                            alt=""
                        />
                    </span>
                </div>
                <div className="software_parent">
                    <div>
                        <h3 className="software">
                            <strong>Software Engineering</strong>
                        </h3>
                    </div>
                </div>
                <div className="note_parent">
        
                        <p className="note">
                            Software Engineering is one of the most in-demand jobs across
                            the globe
                        </p>
                        <br />
                        <p>
                            Software Engineers are also known as programmers, developers or
                            coders. They are the ones behind all the apps and software you
                            use today either on your phone or compurter within your browser.
                            Software such as banking apps, booking apps, mailing apps (e.g
                            Gmail), Chat apps (e.g Whatsapp) and other Social apps (e.g
                            Twitter, Facebook) and many more are created by software
                            engineers.
                        </p>
            
                </div>
                <div className="button_parent">
                    <a className="et_pb_button" href="">
                        Learn More
                    </a>
                </div>
            </div>
            <div className="et_pb_column">
                <div className="data_parent">
                    <span>
                        <img className="data" src="/images/DATA-SQI.jpg" alt="" />
                    </span>
                </div>
                <div className="dsa_parent">
                    <div>
                        <h3 className="dsa">
                            <strong>Data Science & Analysis</strong>
                        </h3>
                    </div>
                </div>
                <div className="note_parent">
                    <div>
                        <p className="note">
                            The eruption of data is transforming individuals and businesses.
                            Companies either big small are now expecting their business
                            decisions to be based on data-led insight.
                        </p>
                        <p>
                            Data specialists have a tremendous impact on business strategies
                            and marketing tactics because everyone now depends on data to
                            formulate improved strategies for the future of their companies.
                        </p>
                    </div>
                </div>
                <div className="button_parent">
                    <a className="et_pb_button" href="">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
        <div className="et_pb_row">
            <div className="et_pb_column">
                <div className="product_parent">
                    <span>
                        <img className="product" src="/images/product.jpg" alt="" />
                    </span>
                </div>
                <div className="UI_parent">
                    <div>
                        <h3 className="UI">
                            <strong>UI/UX - Product Design</strong>
                        </h3>
                    </div>
                </div>
                <div className="note_parent">
                    <div>
                        <p className="note">
                            More than ever before individuals and businesses are relying on
                            digital products and services. From online meeting tools to
                            finance, from e-commerce platforms to healthcare and food apps.
                            Making an intuitive digital product design is even more import
                            at this time as it determines the overall experience of the
                            users.{" "}
                        </p>
                        <p>
                            Here, you’ll build your product design skillset from the bottom
                            up with lessons, mentorship sessions, and career advice from our
                            design professionals.
                        </p>
                    </div>
                </div>
                <div className="button_parent">
                    <a className="et_pb_button" href="">
                        Learn More
                    </a>
                </div>
            </div>
            <div className="et_pb_column">
                <div className="data_parent">
                    <span>
                        <img className="data" src="/images/digital-literacy.jpg" alt="" />
                    </span>
                </div>
                <div className="UI_parent">
                    <div>
                        <h3 className="UI">
                            <strong>Digital Literacy</strong>
                        </h3>
                    </div>
                </div>
                <div className="note_parent">
                    <div>
                        <p className="note">
                            This course is designed to prepare you for success in a modern
                            world full of computers—not only the traditional computers such
                            as desktop and notebook PCs but also computers that you interact
                            with in other places too, like your bank’s ATM or your
                            employer’s computerized cash register. In this course, you will
                            learn about the technologies that drive our computerized
                            society, including the Internet and local area networks (LANs).
                        </p>
                        <p>
                            Taking this course will help you become a digitally literate
                            person—that is, someone who understands how computer technology
                            fits into our modern society and knows how to navigate a variety
                            of computing environments.
                        </p>
                    </div>
                </div>
                <div className="button_parent">
                    <a className="et_pb_button" href="">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    </div>
);
};

export default TopCourses;
