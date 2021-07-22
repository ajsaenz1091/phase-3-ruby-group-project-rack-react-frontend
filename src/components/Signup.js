import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Signup = () => {

    const [form, setForm] = useState({
        name: ""
    })

    const fetchForm = (form) => {
        let config = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(form)
        }
        fetch("http://localhost:9292/users", config)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchForm(form)
        setForm({
            name: ""
        })
        e.target.reset()
        // alert("Account created head to Login link, and Login to continue!")
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };


    return (
        <div className = "sign-up-form">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Create Username" onChange={ handleChange } name="name" />
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