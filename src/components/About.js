import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import gameboy from '../assets/gameboy-w3.png';

const About = () => {
  return (
    <Container className="about-section">
      <Row>
        <Col xs="12" lg="4">
          <h1>About Us</h1>
        </Col>
        <Col xs="12" md="6" lg="4">
          <h3>Welcome To Our Digital Marketing Agency Website</h3>
          <p>
            Integer pulvinar leo id viverra feugiat. Pellentesque libero justo,
            semper at tempus vel, ultrices in ligula. Nulla uter sollicitudin
            velit. Sed porttitor orci vel ferm.
          </p>
          <p>
            Integer pulvinar leo id viverra feugiat. Pellentesque libero justo,
            semper at tempus vel, ultrices in ligula. Nulla uter sollicitudin
            velit. Sed porttitor orci vel fermentum elit maximus. Curabitur ut
            turpis massa in condimentum libero. Pellentesque maximus.
          </p>
        </Col>
        <Col xs="12" md="6" lg="4">
          <img src={gameboy} alt="gameboy" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
