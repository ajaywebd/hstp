import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";

const NewsSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-between align-items-center mb-4">
        <Col xs={12} md={8}>
          <h6 className="text-muted">OUR NEWS</h6>
          <h2>Skin care tips</h2>
        </Col>
        <Col xs={12} md={4} className="text-md-end text-center">
          <Button variant="outline-primary">View All News</Button>
        </Col>
      </Row>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        nextLabel=""
        prevLabel="">
        <Carousel.Item>
          <Row>
            <Col xs={12} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>
                    Here’s how you can get a natural glow this party season
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum, consectetur adipiscing elit, sed do eiusmod
                    tempor.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="John Doe"
                    className="rounded-circle me-2"
                  />
                  <div>
                    <small className="text-muted">John Doe</small>
                    <br />
                    <small className="text-muted">Dec 06, 2019</small>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>
                    Get better skin with these top 10 tips for skin care
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum, consectetur adipiscing elit, sed do eiusmod
                    tempor.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="John Doe"
                    className="rounded-circle me-2"
                  />
                  <div>
                    <small className="text-muted">John Doe</small>
                    <br />
                    <small className="text-muted">Dec 06, 2019</small>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>
                    8 Ways to Save Your Skin if You Exercise Outside This Winter
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum, consectetur adipiscing elit, sed do eiusmod
                    tempor.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="John Doe"
                    className="rounded-circle me-2"
                  />
                  <div>
                    <small className="text-muted">John Doe</small>
                    <br />
                    <small className="text-muted">Dec 06, 2019</small>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        {/* Add more Carousel.Items here with different content if needed */}
      </Carousel>
    </Container>
  );
};

export default NewsSection;
