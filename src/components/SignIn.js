import React from 'react'
import {Form, FloatingLabel, Button} from 'react-bootstrap'


export default function SignIn() {


    return (
        <div className='div-signin'>
        <h1 className='title-signin'>AUDIOPHILE <i className="fa-solid fa-record-vinyl audio"></i> </h1>
        <h1 className='h1-signin'>Sign In</h1>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
        >
        <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Button variant="primary" type="submit" className='submit'>
            Submit
        </Button>
        
        </div>
    )
}