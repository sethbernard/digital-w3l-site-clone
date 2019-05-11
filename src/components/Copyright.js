import React from 'react';
import { Row, Col } from 'reactstrap';

const Copyright = () => {
  return (
    <div className="copyright-fw">
      <Row>
        <Col>
          <p>
            © 2019 Digital. All Rights Reserved | Design by{' '}
            <a
              href="https://w3layouts.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              W3layouts
            </a>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Copyright;
