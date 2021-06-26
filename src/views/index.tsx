import React from 'react';

//own components

import Header, {} from '../components/header';
//import Card, {} from '../components/card';
import NavBaro from '../components/navbar';
import FooterMine from '../components/footer';

// Components from React-Bootstrap

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import logo from '../img/logo.png';




const Index : React.FC = () => (
    <div className="">
        <NavBaro/>



        
        <Container>
            <Row>
                <Col>
                    <div>
                        <img
                            alt="logo"
                            src={logo}
                            width="30"
                            height="30"
                            className="img_logo_index"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
        <Container>
        <Col className="align-center-btns">
            <div className="btn-group">
                <Button  variant="admin">Admin Login</Button>{' '}
            </div></Col>
        <Col className="align-center-btns">
            <div className="btn-group">
                <Button  variant="success">Out User</Button>{' '}
            </div>
        </Col>    
        </Container>
        <FooterMine></FooterMine>

    </div>
);

export default Index;