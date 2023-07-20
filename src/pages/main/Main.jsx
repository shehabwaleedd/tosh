import React from 'react'
import './Main.css'
import main from '../../assets/main1.jpeg'
import Button from 'react-bootstrap/Button';
import { BsTelephone } from 'react-icons/bs';
import main2 from '../../assets/main2.webp'
import main3 from '../../assets/main3.webp'
import main4 from '../../assets/main4.webp'
import { Link } from 'react-router-dom';



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
                    <div className="card-area pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-7 col-sm-9">
                                    <div className="single-card card-style-one rtl-text">
                                        <div className="card-image">
                                            <img src={main4} alt="Image" />
                                        </div>
                                        <div className="card-content">
                                            <h4 className="card-title">
                                                <h1 href="/">خدمة عملاء 24 ساعة</h1>
                                            </h4>
                                            <p className="text">فريق خدمة عملاء ودعم فني كامل على أعلى مستوى</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-7 col-sm-9">
                                    <div className="single-card card-style-one rtl-text">
                                        <div className="card-image">
                                            <img src={main3} alt="Image" />
                                        </div>
                                        <div className="card-content">
                                            <h4 className="card-title">
                                                <h1 href="/)">خبرة 10 سنوات</h1>
                                            </h4>
                                            <p className="text">خبراء في مجال صيانة الاجهزة الالكترونية بجميع انواعها </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-7 col-sm-9">
                                    <div className="single-card card-style-one rtl-text">
                                        <div className="card-image">
                                            <img src={main2} alt="Image" />
                                        </div>
                                        <div className="card-content pt-4">
                                            <h4 className="card-title">
                                                <h1 href="/">ضمان علي الصيانة</h1>
                                            </h4>
                                            <p className="text">
                                                ضمان على صيانة جميع الأجهزة والماركات المتوفرة لدينا
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                </div>
            </div>
        </main>
    )
}

export default Main