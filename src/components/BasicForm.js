import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function BasicForm() {
  return (
    <div className='main'>
        <h1 className='main-header'>Login </h1>
        <hr className='ligne'/>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button> 
            <br/>
            <br/>
            <Form.Text className="text-muted">
                Clicker <Link to="/register">ici</Link> Pour vous inscrire
            </Form.Text>
        </Form>
    </div>
    
  )
}