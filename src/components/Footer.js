import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <div className="footer-fw">
      <Container>
        <Row className="footer">
          <Col md="4" className="footer-description">
            <h3>WHO WE ARE</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium ipsum doloremque elit laudantium, totam rem aperiam,
              eaque ipsa quae. Excepteur ut occaecat proident, sunt voluptatem
              et accusantium doloremque elit dolor sit amet.
            </p>
            <h4>Trusted by more than 1000+ people</h4>
          </Col>

          <Col md="3" className="footer-news">
            <h3>LATEST NEWS</h3>
            <h4>
              <span className="fab fa-twitter" /> Sed ut piciatis unde natus
            </h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit volupta....
            </p>
            <h4>
              <span className="fab fa-twitter" /> Modi tempra incunt sit
            </h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit volupta....
            </p>
          </Col>

          <Col md="3" className="footer-contact">
            <h3>CONTACT US</h3>
            <h4>
              <span className="fa fa-map-marker" /> Location
            </h4>
            <p>Marketing Agency, 5th cross, 4th building, New York City.</p>
            <h4>
              <span className="fa fa-phone" /> Phone
            </h4>
            <p>+121 098 8907 9987</p>
            <h4>
              <span className="fa fa-envelope-open" /> Email
            </h4>
            <li className="link-list">
              <a href="#">info@example.com</a>
            </li>
          </Col>

          <Col md="2" className="footer-links">
            <h3>QUICK LINKS</h3>
            <ul className="link-list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Process</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
