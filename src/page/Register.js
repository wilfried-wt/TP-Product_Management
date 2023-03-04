import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Register() {
  return (
    <>
        <div className="main">
            <h1 className='main-header'>Registration </h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="bold">User name</Form.Label>
                    <Form.Control type="username" placeholder="Enter your user name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="bold">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="bold">Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="bold">Confirm your Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm your Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="loginB">
                    Sign up
                </Button>
            </Form>
        </div>
    </>
  )
}

export default Register