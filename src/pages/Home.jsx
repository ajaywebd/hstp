import React, { useEffect, useState } from "react";
import FeaturesSection from "../components/FeaturesSection";
// import ServicesSection from "../components/ServicesSection";
import NewsSection from "../components/NewsSection";
// import FAQ from "../components/FAQ";
import Testimonial from "../components/Testimonial";
import SliderComponent from "../components/SliderComponent";
import CarouselSlider from "../components/CarouselSlider";
import StatsComponent from "../components/StatsComponent";
import { Link } from "react-router-dom";
import dataFile from "../pdf/Acne.htm";

const Home = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/pdf/Acne.htm")
      .then((response) => response.text())
      .then((text) => setHtmlContent(text))
      .catch((err) => console.error("Error loading HTML file:", err));
  }, []);
  return (
    <>
      <div>
        <CarouselSlider />
        <FeaturesSection />
        <StatsComponent />
        <NewsSection />
        <SliderComponent />
        <Testimonial />
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <Link to={dataFile} target="_blank">
          Download
        </Link>
      </div>
    </>
  );
};

export default Home;
