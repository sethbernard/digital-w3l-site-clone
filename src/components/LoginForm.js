import React from 'react';
import { Button, Form, FormGroup, FormText, Label, Input } from 'reactstrap';
import { Modal } from 'reactstrap';

const LoginForm = props => {
  return (
    <Modal isOpen={props.isOpen} className="login-form" centered="true">
      <a href="/">x</a>
      <Form>
        <h4>Login to Digital</h4>
        <FormGroup>
          <Label for="exampleEmail">Email address</Label>
          <Input type="email" name="email" id="exampleEmail" />
          <FormText color="muted">
            We'll never share your email with anyone else.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" />
        </FormGroup>
        <Button style={{ backgroundColor: 'slateblue' }}>Login</Button>
      </Form>
    </Modal>
  );
};

export default LoginForm;
