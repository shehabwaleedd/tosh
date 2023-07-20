import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'أ/ محمد سليم',
            review: 'بحب اشكر كل العاملين في مركز أكسبريس علي المهنية العالية والامانة والسرعة            ',
        },
        {
            id: 2,
            name: 'أ/ محمد سليم',
            review: 'بحب اشكر كل العاملين في مركز أكسبريس علي المهنية العالية والامانة والسرعة            ',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (activeIndex + 1) % testimonials.length;
            setActiveIndex(newIndex);
        }, 4000);

        return () => clearInterval(interval);
    }, [activeIndex, testimonials.length]);

    return (
        <section className='testimonials'>
            <h2>أراء العملاء</h2>
            <div className="testimonials__container">
                <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={null}>
                    {testimonials.map((testimonial) => (
                        <Carousel.Item key={testimonial.id}>
                            <div className="testimonial">
                                <p>{testimonial.review}</p>
                                <h5>{testimonial.name}</h5>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default Testimonials