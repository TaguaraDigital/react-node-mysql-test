import React, { useContext } from 'react';
import Imagen from '../../assets/image/pictures/ParqueCerroVerde.jpg'

import { AuthContext } from '../../contexts/AuthContext';

import {
    HeroContainer,
    HeroBg,
    ImgBg,
    HeroContent,
    HeroTitle,
    HeroText,
    
} from './Hero.Styles'

const HeroSection = ({ video="public", user }) => {
    const { currentUser } = useContext(AuthContext);;
        return (
        <HeroContainer id="home">
            <HeroBg>
                <ImgBg src={Imagen} alt="bg-images"/>
            </HeroBg>
            <HeroContent>
                <HeroTitle>Administración de Condominios</HeroTitle>
                <HeroText> Honestidad y confiabilidad. </HeroText>
                <HeroText>Servicios integral y personalizado a los Copropietarios y Juntas de Condominio.</HeroText>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
