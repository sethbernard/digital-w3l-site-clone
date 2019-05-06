import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import gameboy from '../assets/gameboy-w3.png';
import snesController from '../assets/snes-controller-w3.png';

const Process = () => {
  return (
    <div className="process-fw">
      <Container className="process-section">
        <Row>
          <Col md="4">
            <h1>Marketing Process</h1>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <img src={gameboy} alt="gameboy" className="img-fluid" />
            <h3>Marketing Products</h3>
            <p>
              Excepteur ut occaecat proident, sunt in culpa quis. Phasellus
              lacinia id erat risus quis.
            </p>
          </Col>
          <Col md="3">
            <img
              src={snesController}
              alt="snes controller"
              className="img-fluid"
            />
            <h3>Advertising Agency</h3>
            <p>
              Excepteur ut occaecat proident, sunt in culpa quis. Phasellus
              lacinia id erat risus quis.
            </p>
          </Col>
          <Col md="3">
            <img src={gameboy} alt="gameboy" className="img-fluid" />
            <h3>Process Planning</h3>
            <p>
              Excepteur ut occaecat proident, sunt in culpa quis. Phasellus
              lacinia id erat risus quis.
            </p>
          </Col>
          <Col md="3">
            <img
              src={snesController}
              alt="snes controller"
              className="img-fluid"
            />
            <h3>Product Sales</h3>
            <p>
              Excepteur ut occaecat proident, sunt in culpa quis. Phasellus
              lacinia id erat risus quis.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Process;
