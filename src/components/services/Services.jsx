import React from 'react'
import './Services.css'
import Data from './Data'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { BsTelephone } from 'react-icons/bs';

const Services = () => {
    return (
        <section className='servicess'>
            <h2>خداماتنا</h2>
            <div className="servicess__container containered">
                {Data.map((item, index) => (
                    <Link to={item.path} className="service_card" key={index}>
                        <div className="service_card_img">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="service_card_text">
                            <h3>{item.desc}</h3>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="main__buttons">
                <Button variant="primary" className='phonenummer'>
                    <BsTelephone style={{ fontSize: "1.3rem" }} />
                    <h1>01025645234</h1>
                </Button>{' '}
                <Button variant="primary">تواصل معنا</Button>{' '}
            </div>
        </section>
    )
}

export default Services