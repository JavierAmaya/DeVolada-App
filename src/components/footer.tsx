import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from '../img/logo.png';

const FooterMine :  React.FC = () => (

    <div className="footer bg-index">
        <Container>
            <Row>
                <Col className="items-footer"> 
                    <img
                        alt="logo"
                        src={logo}
                        width="30"
                        height="30"
                        className=""
                    />
                </Col>
                <Col><p className= "copyrigth items-footer" >© 2021 Copyright: De Volada </p></Col>
            </Row>
        </Container>
    </div>
);


export default FooterMine;

