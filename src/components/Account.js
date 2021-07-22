import React from 'react'
import { useParams } from "react-router-dom";
import '../App.css'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Account = ({users}) => {


    const params = useParams();
    console.log(users);
    console.log(params);
    let currentUser = users.data.find((user) => parseInt(params.id) == user.id)

    return (
        <div>
            <h1>{currentUser.name}</h1>
            {/* {contacts.map(contact => contact.name)} */}
        </div>
    )
}

export default Account;