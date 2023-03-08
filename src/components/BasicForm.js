import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../store';

export default function BasicForm() {
  const navigate = useNavigate();
  const users = useSelector( (state => state.users));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const user = users.find(item => {
      if (item.email === email && item.password === password) {
        return item;
      }
    });
    dispatch(updateUser(user.id));
    if (user) {
      navigate("/add");
    } else {
      alert(" username or password is wrong !!!!");
    }
  };

  return (
  <>
    <div className='main'>
        <h1 className='main-header'>Login </h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="bold">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required={true} value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="bold">Password</Form.Label>
              <Form.Label className="right"><Link to="/register">Forgot password?</Link></Form.Label>
              <Form.Control type="password" placeholder="Password" required={true} value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" className='loginB' onClick={handleSubmit}>
              Log in
            </Button> 
        </Form>
    </div>
    <div className="text-bottom">
      Don't have an account? <Link to="/register">Sign up</Link> 
    </div>
  </>  
  )
}