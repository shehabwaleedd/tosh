import React from 'react'
import Main from '../pages/main/Main'
import Brands from '../components/services/Brands'
import Intro from '../components/intro/Intro'

const HomePage = () => {
    return (
        <section>
            <Main />
            <Brands />
            <Intro />
        </section>
    )
}

export default HomePage