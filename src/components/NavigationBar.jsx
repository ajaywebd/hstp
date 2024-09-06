import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavigationBar.css"; // Import the custom CSS file

const NavigationBar = () => {
  // State to manage navbar collapse (expanded or collapsed)
  const [expanded, setExpanded] = useState(false);

  // Function to toggle the navbar state
  const handleToggle = () => {
    setExpanded(expanded ? false : true); // Toggle the expanded state
  };

  // Function to handle menu item click and collapse navbar for mobile/tablet
  const handleMenuClick = () => {
    setExpanded(false); // Collapse the navbar on mobile and tablet after clicking a non-dropdown item
  };

  return (
    <Navbar bg="light" expand="lg" className="py-3" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-primary brand-logo">
          CarePath-AI
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className="nav-item"
              onClick={handleMenuClick}>
              Home
            </Nav.Link>
            {/* Dropdown for Diseases */}
            <NavDropdown
              title="Disease"
              id="basic-nav-dropdown"
              className="nav-item"
              onClick={(e) => e.preventDefault()} // Prevent collapse on dropdown click
            >
              <NavDropdown.Item
                as={Link}
                to="/disease/maleDisease"
                onClick={handleMenuClick}>
                Male Disease
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/disease/femaleDisease"
                onClick={handleMenuClick}>
                Female Disease
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/disease/childrenDisease"
                onClick={handleMenuClick}>
                Children Disease
              </NavDropdown.Item>
            </NavDropdown>

            {/* Dropdown for Exercises & Yoga */}
            <NavDropdown
              title="Exercises & Yoga"
              id="basic-nav-dropdown"
              className="nav-item"
              onClick={(e) => e.preventDefault()} // Prevent collapse on dropdown click
            >
              <NavDropdown.Item
                as={Link}
                to="/exercise/aerobicExercise"
                onClick={handleMenuClick}>
                Aerobic Exercise
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/exercise/pilateExercise"
                onClick={handleMenuClick}>
                Pilates Exercise
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/exercise/childrenExercise"
                onClick={handleMenuClick}>
                Children Exercise
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/exercise/yogaAsans"
                onClick={handleMenuClick}>
                Yoga Asans
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/nutrition"
              className="nav-item"
              onClick={handleMenuClick}>
              Nutrition
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/calculateBMI"
              className="nav-item"
              onClick={handleMenuClick}>
              Calculate BMI
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="nav-item"
              onClick={handleMenuClick}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
