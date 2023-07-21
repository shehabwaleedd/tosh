import React from 'react'
import './Main.css'
import main from '../../assets/intro.webp'
import Button from 'react-bootstrap/Button';
import { BsTelephone } from 'react-icons/bs';
import main2 from '../../assets/main2.webp'
import main3 from '../../assets/main3.webp'
import main4 from '../../assets/main4.webp'
import { Link } from 'react-router-dom';
import ThreeCards from '../../components/threeCards/ThreeCards';



const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main_img">
                    <img src={main} alt="" />
                    <div className="img_buttons">
                        <Button variant="primary" className='phonenummer'>
                            <BsTelephone style={{ fontSize: "1.3rem" }} />
                            <h1>01025645234</h1>
                        </Button>{' '}
                        <Button variant="primary">تواصل معنا</Button>{' '}
                    </div>
                </div>
                <div className="main__bottom">
                    <h1 className='rtl'>أكسبريس - مركـز خدمة وصيانة معتمد</h1>
                    <ThreeCards />
                    <div className="main__buttons">
                        <Button variant="primary" className='phonenummer'>
                            <BsTelephone style={{ fontSize: "1.3rem" }} />
                            <h1>01025645234</h1>
                        </Button>{' '}
                        <Button variant="primary">تواصل معنا</Button>{' '}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main