import React from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className = "sign-up-form">
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Create Username"  name="username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Create Password"  name="password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                    <h4 className = 'account'>Already have an account?</h4>
                <Link to='/login'>Login</Link>
            </Form>
        </div>
    )
}

export default Signup;