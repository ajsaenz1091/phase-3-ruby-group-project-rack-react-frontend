import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const Login = ({setUserName}) => {

    const history = useHistory()

    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserName(name)
            history.push(`/users`)
    }

    const handleChange = (e) => {
        setName(e.target.value)
    };

    return (
        <div className = "sign-up-form">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" onChange={ handleChange } name = "name"/>
                </Form.Group>
                    <Button variant="primary" type="submit" >
                        Login
                    </Button>
            </Form>
    </div>
    )
}

export default Login;