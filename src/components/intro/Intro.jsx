import React from 'react'
import './Intro.css'
import intro from '../../assets/intro.webp'
import Button from 'react-bootstrap/Button';
import { BsTelephone } from 'react-icons/bs';

const Intro = () => {
    return (
        <section className='intro'>
            <div className="intro__container containered">
                <div className="intro__left">
                    <img src={intro} alt="" />
                </div>
                <div className="intro__right">

                    <div className="intro__text">
                        <h1>
                            مركز خدمة وصيانة معتمد
                        </h1>
                        <p>
                            تقوم شركة أكسبريس بصيانة جميع الموديلات ونقوم بتوفير جميع قطع الغيار الأصلية وضمان على الصيانة
                        </p>
                        <p>
                            تتميز شركة أكسبريس عن غيرها بالسرعة في تلبية رغبات العملاء وتحديد المواعيد المناسبة للصيانة بالمنزل دون نقل الجهاز تحت إشراف مهندسون متخصصون
                        </p>
                        <p>
                            أيضاً تقدم لكم شركة أكسبريس سرب من السيارات المجهزة لتلبية إحتياجتكم على مدار اليوم لسرعة تفادي الأعطال المفاجأة
                        </p>
                        <p>
                            كما يوجد قسم خاص لتلقي الشكاوى. وللتأكد من هوية الفني يسأل عن تحقيق الشخصية الخاص بالشركة خدمة الصيانة<strong> 24 ساعه .7 </strong>أيام فى الأسبوع
                        </p>
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
        </section>
    )
}

export default Intro