import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const Login = ({users}) => {

    const history = useHistory()

    const [form, setForm] = useState({
        name: ""
    })

    const compareFetchToForm = (e) => {
        e.preventDefault()
        debugger;
        let user = users.data.find((a) => a.name === form.name)
            history.push(`/users/${user.id}`)
        debugger;
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className = "sign-up-form">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" onChange={ handleChange } name = "name"/>
                </Form.Group>
                    <Button variant="primary" type="submit" onClick={compareFetchToForm} >
                        Login
                    </Button>
            </Form>
    </div>
    )
}

export default Login;