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
import "./FeaturesSection.css"; // Custom CSS file

const FeaturesSection = () => {
  return (
    <Container fluid className="features-section text-center my-5">
      <h6 className="text-muted">WHY CHOOSE US?</h6>
      <h2 className="mb-5">Offer for you</h2>
      <Row className="features-row">
        <Col className="mb-4 d-flex justify-content-center">
          <div className="feature-card">
            <FontAwesomeIcon
              icon={faMicroscope}
              size="3x"
              className="mb-3 icon-color"
            />
            <h5 className="mt-3">Advanced equipment</h5>
            <p className="text-muted">
              Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              tempor cididunt facilisis.
            </p>
          </div>
        </Col>
        <Col className="mb-4 d-flex justify-content-center">
          <div className="feature-card">
            <FontAwesomeIcon
              icon={faUserMd}
              size="3x"
              className="mb-3 icon-color"
            />
            <h5 className="mt-3">Qualified doctors</h5>
            <p className="text-muted">
              Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              tempor cididunt facilisis.
            </p>
          </div>
        </Col>
        <Col className="mb-4 d-flex justify-content-center">
          <div className="feature-card">
            <FontAwesomeIcon
              icon={faCertificate}
              size="3x"
              className="mb-3 icon-color"
            />
            <h5 className="mt-3">Certified services</h5>
            <p className="text-muted">
              Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod
              tempor cididunt facilisis.
            </p>
          </div>
        </Col>
        <Col className="mb-4 d-flex justify-content-center">
          <div className="feature-card">
            <FontAwesomeIcon
              icon={faHeartbeat}
              size="3x"
              className="mb-3 icon-color"
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
