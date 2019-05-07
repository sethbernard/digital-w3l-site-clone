import React from 'react';
import NavBar from './NavBar';
import { Container, Row, Col } from 'reactstrap';
import bannerImage from '../assets/digital-w3-banner.png';

const Hero = () => {
  return (
    <div className="jumbo">
      <NavBar />
      <Container className="hero">
        <Row className="banner">
          <Col md="6">
            <h1 id="banner-title">Welcome To Digital Marketing Agency</h1>
            <p>
              Integer pulvinar leo id viverra feugiat. Pellentesque libero
              justo, semper at tempus vel, ultrices in ligula. Nulla ut
              sollicitudin velit. Sed porttitor orci vel fermentum maximus.
              Curabitur ut turpis massa.
            </p>
            <button>Read More</button>
            <button>Watch Video</button>
          </Col>
          <Col md="6">
            <img src={bannerImage} alt="banner" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
