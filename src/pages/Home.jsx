import React from "react";
import NavigationBar from "../components/NavigationBar";
import CarouselSlider from "../components/CarouselSlider";
import FeaturesSection from "../components/FeaturesSection";
import ServicesSection from "../components/ServicesSection";
import NewsSection from "../components/NewsSection";

const Home = () => {
  return (
    <>
      <CarouselSlider />
      <FeaturesSection />
      <ServicesSection />
      <NewsSection />
    </>
  );
};

export default Home;
