import React from 'react';

//own components

//import Card, {} from '../components/card';
import NavBaro from '../components/navbar';
import FooterMine from '../components/footer';

// Components from React-Bootstrap

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import logo from '../img/logo.png';

const Login : React.FC = () => (
    <div className="">
        <NavBaro/>
                <body className="main-bg">
                    <div className="login-container text-c animated flipInX">
                            <div>
                                <h1 className="logo-badge text-whitesmoke"><span className="fa fa-user-circle"></span></h1>
                            </div>
                                <h3 className="text-whitesmoke">Sign In Template</h3>
                                <p className="text-whitesmoke">Sign In</p>
                            <div className="container-content">
                                <form className="margin-t">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="*****" />
                                    </div>
                                    <button type="submit" className="form-button button-l margin-b">Sign In</button>
                    
                                    <a className="text-darkyellow" href="#"><small>Forgot your password?</small></a>
                                    <p className="text-whitesmoke text-center"><small>Do not have an account?</small></p>
                                    <a className="text-darkyellow" href="#"><small>Sign Up</small></a>
                                </form>
                                <p className="margin-t text-whitesmoke"><small> Your Name &copy; 2018</small> </p>
                            </div>
                    </div>
                </body>
        <FooterMine></FooterMine>

    </div>
);

export default Login;