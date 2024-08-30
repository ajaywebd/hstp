import React from "react";
import NavigationBar from "../components/NavigationBar";
import CarouselSlider from "../components/CarouselSlider";
import FeaturesSection from "../components/FeaturesSection";
import ServicesSection from "../components/ServicesSection";
import NewsSection from "../components/NewsSection";
import FAQ from "../components/FAQ";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <CarouselSlider />
      <FeaturesSection />
      <ServicesSection />
      <NewsSection />
      <FAQ />
      <Testimonial />
    </>
  );
};

export default Home;
