import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import './Log.css'

const Log = () => {
    return (
        <Container fluid className="home d-flex justify-content-center align-items-center">
        <div className="home-detail">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="title">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="title">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="success" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    </Container>
    );
};

export default Log;