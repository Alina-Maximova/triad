import React, { Component } from 'react'
import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap'

import logo from './logo.jpg'
import DraftsRoundedIcon from '@material-ui/icons/DraftsRounded';
import AddIcCallRoundedIcon from '@material-ui/icons/AddIcCallRounded';





export default class Header extends Component {
    render() {
        return (
            <>
            <Container>
                <Navbar collapseOnSelect  bg="link" variant="danger" >
                    <Container>
                        <Navbar.Brand>
                            <img
                                src={logo}
                                height="90"
                                width="180"
                                className="d-inLine-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav style={{ width:'80%'}}>
                                <Nav.Link style={{ color: 'red' }} href="/">Главная</Nav.Link>
                                <Nav.Link style={{ color: 'red' }} href="/price">Прайс-лист</Nav.Link>
                                <Nav.Link style={{ color: 'red' }} href="/reviews">Отзывы</Nav.Link>
                                <Nav.Link style={{ color: 'red' }} href="/inform">О нас</Nav.Link>
                                
                             
                            </Nav>
                             <div style={{ float: 'right' }}>

                                <p><DraftsRoundedIcon/></p>
                                <p><AddIcCallRoundedIcon/></p>
                            </div>
                            <div style={{ float: 'right' }}>

                                <p>triada@yandex.ru</p>
                                <p>+7 (49235) 2-23-20</p>
                            </div>
                            
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </Container>

              

            </>

        );
    }
}