import React from 'react'
import './Services.css'
import { useParams } from 'react-router-dom'
import Data from '../../assets/Data'
import Button from 'react-bootstrap/Button';
import { BsTelephone } from 'react-icons/bs';
import ThreeCards from '../../components/threeCards/ThreeCards';
import main from '../../assets/intro.webp'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Services = () => {
    const { name } = useParams();
    const post = Data.find(item => item.name === name);

    if (!post) {
        return (
            <section className='services'>
                <div>Service not found</div>
            </section>
        );
    }

    return (
        <section className='services'>
            <div className="services__container container">
                <div className="container__upper">
                    <div className="container__upper__left">
                        <img src={post.logo} alt={post.name} />
                    </div>
                    <div className="container__upper__right">
                        <h1>{post.main_text}</h1>
                        <h4>{post.main_h1}</h4>
                    </div>
                </div>
                <div className="main__buttons">
                    <Button variant="primary" className='phonenummer'>
                        <BsTelephone style={{ fontSize: "1.3rem" }} />
                        <h1>01025645234</h1>
                    </Button>{' '}
                    <Button variant="primary">تواصل معنا</Button>{' '}
                </div>
                <div className="container__upper_lower">
                    <div className="upper__lower_text">
                        <h1 className='rtl'>{post.customerService}</h1>
                    </div>
                    <div className="upper__lower_container">
                        <ThreeCards />
                    </div>
                </div>
                <div className="container__bottom_upper">
                    <div className="bottom__upper_left">
                        <div className="upper__left_upper">
                            <img src={post.washing} alt="" />
                            <div className="left__upper_text">
                                <h1>{post.washing_h1}</h1>
                                <p>{post.washing_p}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom__upper_right">
                        <div className="upper__right_upper">
                            <div className="right__upper_text">
                                <h1>{post.hardware_h1}</h1>
                                <p>{post.hardwware_p}</p>
                            </div>
                            <img src={post.hardware} alt="" />
                        </div>
                    </div>
                </div>
                <div className="main__buttons">
                    <Button variant="primary" className='phonenummer'>
                        <BsTelephone style={{ fontSize: "1.3rem" }} />
                        <h1>01025645234</h1>
                    </Button>{' '}
                    <Button variant="primary">تواصل معنا</Button>{' '}
                </div>
                <div className="container__bottom_lower">
                    <h1>من نحن</h1>
                    <p>{post.who_are_we}</p>
                    <p>نقوم بصيانة جميع الأجهزة المنزلية من :
                        ثلاجات - غسالات - شاشات - ميكرويف في منزلك مع اطلاعك على الأعطال المتواجدة في الجهاز بعد الكشف عليه من قبل فنين ومتخصصين ذو كفاءة عالية في صيانة الأجهزة المنزلية
                    </p>
                    <div className="bottom__lower_right">
                        <div className="lower__right_right">
                            <img src={main} alt="main" />
                        </div>
                        <div className="lower__right_left">
                            <ul>
                                <li><AiOutlineCheckCircle style={{color: 'deepskyblue', fontSize: "2.5rem"}}/>الدقة والامانة</li>
                                <li><AiOutlineCheckCircle style={{color: 'deepskyblue', fontSize: "2.5rem"}}/>المواعيد الجادة</li>
                                <li><AiOutlineCheckCircle style={{color: 'deepskyblue', fontSize: "2.5rem"}}/>قطع غيار اصلية</li>
                                <li><AiOutlineCheckCircle style={{color: 'deepskyblue', fontSize: "2.5rem"}}/>ضمان علي الصيانة</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services