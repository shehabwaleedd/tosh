import React from 'react'
import Main from '../pages/main/Main'
import Brands from '../components/brands/Brands'
import Intro from '../components/intro/Intro'
import Services from '../components/services/Services'
import Testimonials from '../components/testimonials/Testimonials'

const HomePage = () => {
    return (
        <section>
            <Main />
            <Brands />
            <Intro />
            <Services />
            <Testimonials />
        </section>
    )
}

export default HomePage