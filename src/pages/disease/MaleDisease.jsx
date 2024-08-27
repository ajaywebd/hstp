import React, { useState } from "react";
import { Link } from "react-router-dom";

const MaleDisease = () => {
  const [clickValues, setClickValues] = useState([]); // State to hold all click values

  const clickHandler = (value) => {
    setClickValues((prevValues) => [...prevValues, Number(value)]); // Append the clicked value
  };

  return (
    <>
      <div
        className="container-fluid p-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.pixabay.com/photo/2015/02/26/15/40/doctor-650534_1280.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          position: "relative",
        }}>
        <h1 className="text-center mt-2 text-bg-primary">
          Choose Your Disease
        </h1>
        <div
          className="text-center d-flex flex-wrap align-items-center justify-content-center gap-4"
          style={{
            maxHeight: "90vh",
            overflowY: "auto",
            padding: "1rem",
          }}>
          {/* Buttons */}
          <Link
            state={{ value: 1 }} // Passing the value "2" to HomeRemedies component
            to="/homeRemedies"
            className="btn btn-success mb-3">
            Abdominal pain
          </Link>
          <Link
            state={{ value: 2 }} // Passing the value "2" to HomeRemedies component
            to="/homeRemedies"
            className="btn btn-success mb-3">
            Acne
          </Link>
          <Link
            state={{ value: 3 }} // Passing the value "2" to HomeRemedies component
            to="/homeRemedies"
            className="btn btn-success mb-3">
            Allergies
          </Link>
          <Link
            state={{ value: 4 }} // Passing the value "2" to HomeRemedies component
            to="/homeRemedies"
            className="btn btn-success mb-3">
            Athlete's foot
          </Link>
        </div>
      </div>
      {/* <div>
        
        <div className="text-center">
          <Link to="/homeRemedies" className="btn btn-success mb-3">
            Abdominal pain
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default MaleDisease;
