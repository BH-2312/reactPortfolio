import React from "react";
import "./style.css";
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="https://github.com/BH-2312" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github-square']} style={{ fontSize: "36px" }} /></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/ben-hilliard-9777894b/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} style={{ fontSize: "36px" }} /></Nav.Link>
                        <Nav.Link href="benhilliard23@hotmail.com" >Email</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}



export default Header;