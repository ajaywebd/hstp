import React from "react";
import CarouselSlider from "../components/CarouselSlider";
import FeaturesSection from "../components/FeaturesSection";
import ServicesSection from "../components/ServicesSection";
import NewsSection from "../components/NewsSection";
import FAQ from "../components/FAQ";
import Testimonial from "../components/Testimonial";
import SliderComponent from "../components/SliderComponent";

const Home = () => {
  return (
    <>
      <CarouselSlider />
      <FeaturesSection />
      <ServicesSection />
      <SliderComponent />
      <NewsSection />
      <FAQ />
      <Testimonial />
    </>
  );
};

export default Home;
