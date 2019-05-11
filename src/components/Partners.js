import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Partners = () => {
  return (
    <div className="partners-fw">
      <Container className="partners-section" id="partners">
        <Row>
          <Col>
            <h1>Our Marketing Partners</h1>
          </Col>
        </Row>
        <Row className="icons">
          <Col xs="4" md="2">
            <span className="fab fa-codepen codepen-logo" />
          </Col>
          <Col xs="4" md="2">
            <span className="fab fa-lastfm" />
          </Col>
          <Col xs="4" md="2">
            <span className="fab fa-codiepie" />
          </Col>
          <Col xs="4" md="2">
            <span className="fab fa-drupal" />
          </Col>
          <Col xs="4" md="2">
            <span className="fab fa-dashcube" />
          </Col>
          <Col xs="4" md="2">
            <span className="fab fa-skyatlas" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Partners;
