import React, { useState } from "react";
import "./Nutrition.css"; // Custom CSS file for additional styling
import { Dropdown } from "react-bootstrap";
import DisplayNutrition from "../components/DisplayNutrition";

const Nutrition = () => {
  const [selectedBMI, setSelectedBMI] = useState("");

  const handleSelect = (e) => {
    setSelectedBMI(e);
    console.log("Selected BMI range:", e);
  };

  return (
    <>
      <section id="nutrition-hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 d-flex flex-column justify-content-center order-md-1 order-2">
              <h1 className="text-white text-md-left text-center">
                The Most Valuable Thing is Your Health
              </h1>
              <p className="text-white text-md-left text-center">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove.
              </p>
              <div className="d-flex flex-column align-items-center justify-content-md-start justify-content-center w-100">
                <Dropdown onSelect={handleSelect} className="w-100 mb-3">
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    className="btn-lg w-100">
                    Select Your Range of BMI
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="w-100">
                    <Dropdown.Item eventKey="3">3</Dropdown.Item>
                    <Dropdown.Item eventKey="6">3 - 6</Dropdown.Item>
                    <Dropdown.Item eventKey="9">6 - 9</Dropdown.Item>
                    <Dropdown.Item eventKey="12">9 - 12</Dropdown.Item>
                    <Dropdown.Item eventKey="15">12 - 15</Dropdown.Item>
                    <Dropdown.Item eventKey="18">15 - 18</Dropdown.Item>
                    <Dropdown.Item eventKey="21">18 - 21</Dropdown.Item>
                    <Dropdown.Item eventKey="24">21 - 24</Dropdown.Item>
                    <Dropdown.Item eventKey="27">24 - 27</Dropdown.Item>
                    <Dropdown.Item eventKey="30">27 - 30</Dropdown.Item>
                    <Dropdown.Item eventKey="33">30 - 33</Dropdown.Item>
                    <Dropdown.Item eventKey="36">33 - 36</Dropdown.Item>
                    <Dropdown.Item eventKey="39">36 - 39</Dropdown.Item>
                    <Dropdown.Item eventKey="42">39 - 42</Dropdown.Item>
                    <Dropdown.Item eventKey="45">42 - 45</Dropdown.Item>
                    <Dropdown.Item eventKey="48">45 - 48</Dropdown.Item>
                    <Dropdown.Item eventKey="51">48 - 51</Dropdown.Item>
                    <Dropdown.Item eventKey="53">51 - 53</Dropdown.Item>
                    <Dropdown.Item eventKey="56">53 - 56</Dropdown.Item>
                    <Dropdown.Item eventKey="59">56 - 59</Dropdown.Item>
                    <Dropdown.Item eventKey="62">59 - 62</Dropdown.Item>
                    <Dropdown.Item eventKey="65">62 - 65</Dropdown.Item>
                    <Dropdown.Item eventKey="68">65 - 68</Dropdown.Item>
                    <Dropdown.Item eventKey="71">68 - 71</Dropdown.Item>
                    <Dropdown.Item eventKey="74">71 - 74</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="col-md-6 order-md-2 order-1 mb-4 mb-md-0">
              <img
                src="https://images.unsplash.com/photo-1719937206094-8de79c912f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Doctor"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <DisplayNutrition selectedBMI={selectedBMI} />
    </>
  );
};

export default Nutrition;
