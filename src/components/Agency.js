import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import laptop from '../assets/laptop-banner-w3.png';

function Agency() {
  return (
    <div className="agency-fw">
      <Container className="agency-section">
        <Row>
          <Col xs="12" lg="6">
            <h1>Digital Marketing Business Agency</h1>
            <p>
              Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem
              Lorem int ipsum dolor sit amet when an unknown printer took a
              galley of type.Vivamus id tempor felis. Cras sagittis mi sit amet
              malesuada mollis. Mauris porroinit consectetur cursus tortor vel
              interdum.
            </p>
          </Col>
          <Col xs="12" lg="6">
            <img src={laptop} alt="laptop and phone" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Agency;
