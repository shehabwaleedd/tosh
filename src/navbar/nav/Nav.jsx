import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'; // Import Link component
import './Nav.css'
import logo from '../../assets/express-logo-1.png'

const MainNavbar = () => {
    return (
        <Navbar expand="lg" className="p-4 rtl-navbar navbar-brand">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Navbar.Brand as={Link} to="/">الرئيسية</Navbar.Brand>
                    <NavDropdown title="خدماتنا" id="basic-nav-dropdown" className='d-f gap-1'>
                        <NavDropdown.Item as={Link} to="/Kiriazy">كريازي</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Toshiba">توشيبا</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Samsung">سامسونج</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/LG">ال جي</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Sanuzi">زانوسي</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Sharp">شارب</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/ElectroStar">الكتروستار</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/White Point">وايت بوينت</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Beko">بيكو</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Whirlpool">ويرلبول</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Candy">كاندي</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Hitachi">هيتاشي</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/White Wale">وايت ويل</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Union Air">يونيون اير</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Goldy">جولدي</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Endest">اينديست</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/fridges_maint">صيانة ثلاجات</Nav.Link>
                    <Nav.Link as={Link} to="/washing_maint">صيانة غسالات</Nav.Link>
                    <Nav.Link as={Link} to="/tv_maint">صيانة شاشات</Nav.Link>
                    <Nav.Link as={Link} to="/microwave_maint">صيانة ميكروويف</Nav.Link>
                    <Nav.Link hras={Link} to="/book_a_date">احجز موعد</Nav.Link>
                    <Nav.Link as={Link} to="/contact">تواصل معنا</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <img src={logo} alt="logo" />


        </Navbar>
    )
}

export default MainNavbar