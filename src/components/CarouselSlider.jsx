import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CarouselSlider.css"; // Import the custom CSS file

const CarouselSlider = () => {
  return (
    <div className="txtContainer">
      <Carousel interval={2000} className="carousel-container">
        {/* Change interval to 2 seconds */}
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://cdn.pixabay.com/photo/2014/12/10/20/48/laboratory-563423_1280.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://cdn.pixabay.com/photo/2015/02/26/15/40/doctor-650534_1280.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_1280.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://cdn.pixabay.com/photo/2014/02/27/16/09/microscope-275984_1280.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_1280.jpg"
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
