import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nutrition.css";

const Nutrition = () => {
  const [selectedBMI, setSelectedBMI] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const handleSelect = (e) => {
    setSelectedBMI(e);
  };

  const handleSelectAge = (e) => {
    setSelectedAge(e);
  };

  const clickHandler = (e) => {
    setSelectedGender(e.target.value);
  };

  return (
    <>
      <section
        id="nutrition-hero"
        className="d-flex align-items-center justify-content-center bg-light py-5">
        <div className="container">
          {/* Calculate BMI button at top left */}
          <div className="calculate-bmi-button">
            <Link to="/calculateBMI" className="btn btn-danger">
              Calculate BMI
            </Link>
          </div>

          {/* Centered heading and paragraph */}
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12">
              <h1 className="text-dark">
                The Most Valuable Thing is Your Health
              </h1>
              <p className="text-dark">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>

          <div className="row justify-content-between">
            {/* Left side: Data collection form */}
            <div className="col-lg-5 col-md-6 col-12 mb-4">
              <div className="row mb-3">
                <div className="col-md-12">
                  <Dropdown onSelect={handleSelectAge}>
                    <Dropdown.Toggle
                      variant="light"
                      id="dropdown-age"
                      className="btn-lg w-100">
                      Select Your Range of Age
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      <Dropdown.Item eventKey="3">0-3</Dropdown.Item>
                      <Dropdown.Item eventKey="6">3-6</Dropdown.Item>
                      {/* Add other Age options */}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="col-md-12 mt-3">
                  <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle
                      variant="light"
                      id="dropdown-bmi"
                      className="btn-lg w-100">
                      Select Your Range of BMI
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      <Dropdown.Item eventKey="16">13-16</Dropdown.Item>
                      {/* Add other BMI options */}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-12 d-flex justify-content-center">
                  <span className="text-dark me-3">Gender:</span>
                  <div className="form-check form-check-inline">
                    <input
                      onClick={clickHandler}
                      type="radio"
                      name="gender"
                      value="male"
                      id="gender-male"
                      className="form-check-input"
                    />
                    <label
                      className="form-check-label text-dark"
                      htmlFor="gender-male">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      onClick={clickHandler}
                      type="radio"
                      name="gender"
                      value="female"
                      id="gender-female"
                      className="form-check-input"
                    />
                    <label
                      className="form-check-label text-dark"
                      htmlFor="gender-female">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Display selected data */}
            <div className="col-lg-5 col-md-6 col-12 d-flex flex-column justify-content-center align-items-start mb-4">
              <h3>Selected Data</h3>
              <p className="mb-1">Selected Age: {selectedAge}</p>
              <p className="mb-1">Selected BMI: {selectedBMI}</p>
              <p className="mb-1">Selected Gender: {selectedGender}</p>
            </div>
          </div>

          {/* Button centered below */}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-4 col-md-6 col-8 text-center">
              <Link
                state={{ selectedAge, selectedBMI, selectedGender }}
                to="/displayBMI"
                className="btn btn-success btn-lg w-100">
                Get Nutrition
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nutrition;
