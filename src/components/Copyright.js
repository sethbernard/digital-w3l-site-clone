import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Copyright = () => {
  return (
    <div className="copyright-fw">
      <Row>
        <Col>
          <p>
            © 2019 Digital. All Rights Reserved | Design by{' '}
            <a href="https://w3layouts.com/" target="_blank">
              W3layouts
            </a>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Copyright;
