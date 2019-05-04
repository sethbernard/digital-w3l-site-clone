import React from 'react';
import { Container } from 'reactstrap';

const Portfolio = () => {
  const imageFileNames = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'];
  const portfolioImages = imageFileNames.map(image => {
    return (
      <img
        key={image}
        src={require(`../assets/portfolio-images/${image}.jpg`)}
        alt=""
        className="img-responsive"
        style={{ width: '270px', height: '200px', paddingBottom: '15px' }}
      />
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
        {portfolioImages}
      </Container>
    </div>
  );
};

export default Portfolio;
