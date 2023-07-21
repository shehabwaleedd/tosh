import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../../assets/express-logo-1.png';
import Data from '../../assets/Data';

const MainNavbar = () => {
    return (
        <nav className='nav'>
            <Navbar expand="lg" className="p-4 rtl-navbar navbar-brand">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Navbar.Brand as={Link} to="/">الرئيسية</Navbar.Brand>
                        <NavDropdown title="خدماتنا" id="basic-nav-dropdown" className='d-f'>
                            {Data.map((item, index) => (
                                <NavDropdown.Item as={Link} to={`/services/${item.name}`} key={index}>{item.name}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Nav.Link as={Link} to="/fridges_maint">صيانة ثلاجات</Nav.Link>
                        <Nav.Link as={Link} to="/washing_maint">صيانة غسالات</Nav.Link>
                        <Nav.Link as={Link} to="/tv_maint">صيانة شاشات</Nav.Link>
                        <Nav.Link as={Link} to="/microwave_maint">صيانة ميكروويف</Nav.Link>
                        <Nav.Link as={Link} to="/book_a_date">احجز موعد</Nav.Link>
                        <Nav.Link as={Link} to="/contact">تواصل معنا</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <img src={logo} alt="logo" />
            </Navbar>
        </nav>
    )
}

export default MainNavbar;
