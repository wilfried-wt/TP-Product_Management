import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function BasicForm() {
  return (
  <>
    <div className='main'>
        <h1 className='main-header'>Login </h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="bold">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="bold">Password</Form.Label>
              <Form.Label className="right"><Link to="/register">Forgot password?</Link></Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" className='loginB'>
              Sign up
            </Button> 
        </Form>
    </div>
    <div className="text-bottom">
      Don't have an account? <Link to="/register">Sign up</Link> 
    </div>
  </>  
  )
}