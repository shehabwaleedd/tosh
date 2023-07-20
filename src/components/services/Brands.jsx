import React from 'react'
import './Brands.css'
import Data from './Data';
import { Link } from 'react-router-dom';


const Brands = () => {
    return (
        <section className='brands'>
            <div className="brands__container">
                {Data.map((item, index) => (
                    <Link to={`/${item.name}`} className="brand_card" key={index}>
                        <div className="brand_card_img">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="brand_card_text">
                            <h3>{item.desc}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Brands