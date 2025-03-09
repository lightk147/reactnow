import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProgramsOverview from "./components/ProgramsOverview";
import TopCourses from "./components/TopCourses";
import AlumniSection from "./components/AlumniSection";
import Footer from "./components/Footer";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProgramsOverview />
      <TopCourses />
      <AlumniSection />
      <Footer />
    </div>
  );
};

export default App;