import React from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const Login = () => {
    return (
        <div className = "sign-up-form">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username"  name = "username"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password"  name = "password"/>
                </Form.Group>
                    <Button variant="primary" type="submit" >
                        Login
                    </Button>
            </Form>
    </div>
    )
}

export default Login;