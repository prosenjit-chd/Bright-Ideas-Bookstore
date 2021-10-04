import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// Header Internal Style 
const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#157347",
        borderBottom: "solid 2px #157347"
    }

    // Internal Style Use here 
    return (
        <div>
            {/* Bootstrap Tag use here  */}
            <Navbar variant="light" expand="lg" className="fixed-top" style={{ "backgroundColor": "rgba(253, 245, 230, 0.74)"}}>
            <Container fluid>
                <NavLink className="navbar-brand text-success fw-bold" to="/home">Easy English</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fw-bold">
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/home">Home</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/services">Services</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/about">About</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/signin">SignIn</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;