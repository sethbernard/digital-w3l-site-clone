import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ContactPage = () => {
  return (
    <Container className="contact-section">
      <Row>
        <Col xs="12">
          <h1>Contact Us</h1>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="6" className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13197049.772130001!2d-100.34261267722427!3d36.03661485515748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1557867680714!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullscreen
            className="contact-map"
            title="US Map"
          />
        </Col>
        <Col xs="12" md="6" className="mt-4">
          <Form className="contact-form">
            <h3>Contact Form</h3>
            <FormGroup>
              <Label for="exampleName" />
              <Input
                type="name"
                name="name"
                id="exampleName"
                placeholder="Your Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail" />
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Your Email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePhoneNumber" />
              <Input
                type="phoneNumber"
                name="phoneNumber"
                id="examplePhoneNumber"
                placeholder="Phone Number"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText" />
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                placeholder="Your Message Here..."
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
      <Row className="communication">
        <Col xs="12" md="6">
          <h4>
            <span className="fa fa-comments" />
            GENERAL COMMUNICATION
          </h4>
          <p>
            For General Queries, Including Partnership Opportunities, Please
            Email Us At{' '}
            <span style={{ color: '#b74592' }}>Info@Example.Com</span>
          </p>
        </Col>
        <Col xs="12" md="6">
          <h4>
            <span className="fa fa-life-ring" />
            TECHNICAL SUPPORT
          </h4>
          <p>
            We Are Here To Help! If You Have Technical Issues, Contact Support
            <span style={{ color: '#b74592' }}> +12 388 455 6789</span>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
