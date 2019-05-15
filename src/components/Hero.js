import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import bannerImage from '../assets/digital-w3-banner.png';
import laptopImage from '../assets/laptop-banner-w3.png';
import Popup from './Popup';

class Hero extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <div className="hero-fw">
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
              <Popup isOpen={this.state.modal} image={laptopImage} href="/" />
              <button onClick={this.toggle}>Read More</button>
              <Popup isOpen={this.state.modal} image={laptopImage} href="/" />
              <button onClick={this.toggle}>Watch Video</button>
            </Col>
            <Col md="6">
              <img src={bannerImage} alt="banner" className="img-responsive" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Hero;
