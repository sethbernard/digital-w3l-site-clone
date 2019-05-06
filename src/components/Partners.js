import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Partners = () => {
  return (
    <div className="partners-fw">
      <Container className="partners-section">
        <Row>
          <Col>
            <h1>Our Marketing Partners</h1>
          </Col>
        </Row>
        <Row className="icons">
          <Col md="2">
            <span className="fab fa-codepen codepen-logo" />
          </Col>
          <Col md="2">
            <span className="fab fa-lastfm" />
          </Col>
          <Col md="2">
            <span className="fab fa-codiepie" />
          </Col>
          <Col md="2">
            <span className="fab fa-drupal" />
          </Col>
          <Col md="2">
            <span className="fab fa-dashcube" />
          </Col>
          <Col md="2">
            <span className="fab fa-skyatlas" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Partners;
