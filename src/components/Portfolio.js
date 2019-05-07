import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Portfolio = () => {
  const imageFileNames = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'];
  const portfolioImages = imageFileNames.map(image => {
    return (
      <Col xs="6" md="3" key={image}>
        <img
          src={require(`../assets/portfolio-images/${image}.jpg`)}
          alt=""
          className="img-fluid"
          style={{ paddingBottom: '30px' }}
        />
      </Col>
    );
  });

  return (
    <div className="portfolio-section">
      <Container>
        <h1>Our Portfolio</h1>
      </Container>
      <Container
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignContent: 'center'
        }}
      >
        <Row>{portfolioImages}</Row>
      </Container>
    </div>
  );
};

export default Portfolio;
