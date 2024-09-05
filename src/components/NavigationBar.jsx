import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavigationBar.css"; // Import the custom CSS file

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-primary">
          HSTP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-item">
              Home
            </Nav.Link>
            <NavDropdown
              title="Disease"
              id="basic-nav-dropdown"
              className="nav-item">
              <NavDropdown.Item as={Link} to="/disease/maleDisease">
                Male Disease
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/disease/femaleDisease">
                Female Disease
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/disease/childrenDisease">
                Children Disease
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Exercises & Yoga"
              id="basic-nav-dropdown"
              className="nav-item">
              <NavDropdown.Item as={Link} to="/exercise/aerobicExercise">
                Aerobic Exercise
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="exercise/pilateExercise">
                Pilates Exercise
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="exercise/childrenExercise">
                Children Exercise
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="exercise/yogaAsans">
                Yoga Asans
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/nutrition" className="nav-item">
              Nutritions
            </Nav.Link>
            <Nav.Link as={Link} to="/calculateBMI" className="nav-item">
              Calculate BMI
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
