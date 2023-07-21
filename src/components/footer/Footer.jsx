import React from 'react'
import './Footer.css'
import Button from 'react-bootstrap/Button';
import { BsTelephone } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className="footer__container">
                    <div className="footer__text">
                        <h1>خدمة العملاء والابلاغ عن الاعطال</h1>
                    </div>
                    <div className="footer__buttons">
                        <Button className='phonenummer whatsapp'>
                            <BsWhatsapp style={{ fontSize: "1.5rem", marginTop: "0.4rem" }} />
                            <h1>01212105146</h1>
                        </Button>
                        {' '}
                        <Button variant="primary" className='phonenummer'>
                            <BsTelephone style={{ fontSize: "1.3rem" }} />
                            <h1>01212105146</h1>
                        </Button>{' '}
                        <Button variant="primary">تواصل معنا</Button>{' '}
                    </div>
                </div>
            </footer>
            <div className="footer__footer">
                <p>Express 2023</p>
            </div>
        </>
    )
}

export default Footer