import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardText, CardTitle } from 'reactstrap';

const Services = () => {
  return (
    <div className="services-fw">
      <Container className="services-section">
        <Row>
          <Col md="4">
            <h1>What We Provide</h1>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <Card className="shadow-lg">
              <span className="fab fa-bandcamp" />
              <CardTitle className="card-title">Branding</CardTitle>
              <CardText>
                Excepteur sint occaecat non proident, sunt in culpa quis.
                Phasellus lacinia id erat eu ullamcorper.
              </CardText>
            </Card>
          </Col>

          <Col md="3">
            <Card className="shadow-lg">
              <span className="fab fa-codepen" />
              <CardTitle className="card-title">Marketing</CardTitle>
              <CardText>
                Excepteur sint occaecat non proident, sunt in culpa quis.
                Phasellus lacinia id erat eu ullamcorper.
              </CardText>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-lg">
              <span className="fab fa-btc" />
              <CardTitle className="card-title">Advertising</CardTitle>
              <CardText>
                Excepteur sint occaecat non proident, sunt in culpa quis.
                Phasellus lacinia id erat eu ullamcorper.
              </CardText>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-lg">
              <span className="fa fa-cloud cloud-icon" />
              <CardTitle className="card-title">Product Sales</CardTitle>
              <CardText>
                Excepteur sint occaecat non proident, sunt in culpa quis.
                Phasellus lacinia id erat eu ullamcorper.
              </CardText>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
