import React from 'react';

import Header from "../components/Header";
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header page="landing" />
            <HeroSection />
            <AboutSection  id="about" title="Somos una empresa seria" bgClr={'var(--greenClr)'} />
            <ServicesSection  id="service" title="Te apoyamos con los siguientes Servicios" bgClr={'var(--lightBlueClr)'}/>
            <Footer />
        </div>
    )
}

export default Home
