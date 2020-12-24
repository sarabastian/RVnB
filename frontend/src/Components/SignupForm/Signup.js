import React from 'react';
import './Signup.css';
import { Button, Form, FormGroup, Modal }
    from 'react-bootstrap';
// import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import { FacebookLoginButton } from 'react-social-login-buttons';

const Signup = (props) => {
    return (
        <section>
            <Modal show={props.show} onHide={props.onHide} >
            <Form className="Signup-form">
                <h1>
                    {/* <span className="font-weight-bold">VanBnB</span> */}
                </h1>
                <h2 className="text-center">Sign up</h2>
                <FormGroup>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block">Log in</Button>
                <div className="text-center pt-3">
                    Or continue with social media
                </div>
                <FacebookLoginButton/>
            </Form>
            </Modal>
        </section>
    )
}

export default Signup;