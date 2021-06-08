import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import deliveryLogo from "../img/delivery.png";


const NavBaro: React.FC = () => (

    <Navbar bg="dark"  className ="navbar_mine" variant="dark">
        <Col>
            <Navbar.Brand  href="#home">
                <img
                    alt="deliveryLogo"
                    src={deliveryLogo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top item-left"
                />{' '}
                <a className ="navbar_mine" href=""><strong>De Volada</strong></a>
            </Navbar.Brand>
        </Col>
        <Col></Col>
        <Col>
            <div className="aling-btns-nav">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto items-nav">
                        <Nav.Link className="items-nav" href="#features">Features</Nav.Link>
                        <Nav.Link className="items-nav" href="#pricing">Pricing</Nav.Link>
                        <NavDropdown className="items-nav" title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item className="items-nav" href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item className="items-nav" href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item className="items-nav" href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="items-nav" href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="mr-sm-2" >
                        <Nav.Link className="items-nav" href="#deets">More deets</Nav.Link>
                        <Nav.Link className="items-nav" eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Col>
    </Navbar>
);
export default NavBaro;