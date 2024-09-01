import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicroscope,
  faUserMd,
  faCertificate,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";

const FeaturesSection = () => {
  return (
    <Container className="text-center bg-light my-5">
      <h6 className="text-muted">WHY CHOOSE US?</h6>
      <h2 className="mb-5">Offer for you</h2>
      <Row>
        <Col xs={12} sm={6} md={3} className="mb-4 d-flex">
          <div className="p-4 border border-primary rounded shadow-sm h-100 w-100">
            <FontAwesomeIcon
              icon={faMicroscope}
              size="3x"
              className="mb-3"
              style={{ color: "#007bff" }} // Blue color for the icon
            />
            <h5 className="mt-3">Advanced equipment</h5>
            <p className="text-muted">
              Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              tempor cididunt facilisis.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4 d-flex">
          <div className="p-4 border border-primary rounded shadow-sm h-100 w-100">
            <FontAwesomeIcon
              icon={faUserMd}
              size="3x"
              className="mb-3"
              style={{ color: "#007bff" }} // Blue color for the icon
            />
            <h5 className="mt-3">Qualified doctors</h5>
            <p className="text-muted">
              Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              tempor cididunt facilisis.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4 d-flex">
          <div className="p-4 border border-primary rounded shadow-sm h-100 w-100">
            <FontAwesomeIcon
              icon={faCertificate}
              size="3x"
              className="mb-3"
              style={{ color: "#007bff" }} // Blue color for the icon
            />
            <h5 className="mt-3">Certified services</h5>
            <p className="text-muted">
              Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              tempor cididunt facilisis.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4 d-flex">
          <div className="p-4 border border-primary rounded shadow-sm h-100 w-100">
            <FontAwesomeIcon
              icon={faHeartbeat}
              size="3x"
              className="mb-3"
              style={{ color: "#007bff" }} // Blue color for the icon
            />
            <h5 className="mt-3">Emergency care</h5>
            <p className="text-muted">
              Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              tempor cididunt facilisis.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturesSection;
