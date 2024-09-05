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
        className="d-flex align-items-center bg-light py-5 position-relative">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-md-10 d-flex flex-column justify-content-center order-md-1 order-2">
              <h1 className="text-dark text-center mb-4">
                The Most Valuable Thing is Your Health
              </h1>
              <p className="text-dark text-center mb-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove.
              </p>

              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle
                      variant="light"
                      id="dropdown-bmi"
                      className="btn-lg w-100">
                      Select Your Range of Age
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      <Dropdown.Item eventKey="3">0-3</Dropdown.Item>
                      <Dropdown.Item eventKey="3">3-6</Dropdown.Item>
                      {/* Add other BMI options here */}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="col-md-6">
                  <Dropdown onSelect={handleSelectAge}>
                    <Dropdown.Toggle
                      variant="light"
                      id="dropdown-age"
                      className="btn-lg w-100">
                      Select Your Range of BMI
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      <Dropdown.Item eventKey="16">13 - 16</Dropdown.Item>
                      {/* Add other Age options here */}
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

              <div className="row">
                <div className="col-12">
                  <Link
                    state={{ selectedAge, selectedBMI, selectedGender }} // Passing the selected values to another component
                    to="/displayBMI"
                    className="btn btn-success w-100 btn-lg">
                    Get Nutrition
                  </Link>
                </div>
              </div>

              <div className="text-bg-danger p-2 mt-3 text-center rounded">
                <p className="mb-1">Selected BMI: {selectedBMI}</p>
                <p className="mb-1">Selected Age: {selectedAge}</p>
                <p className="mb-0">Selected Gender: {selectedGender}</p>
              </div>

              <div className="calculateBMI">
                <Link to="/calculateBMI" className="btn btn-success ms-2">
                  Calculate BMI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nutrition;
