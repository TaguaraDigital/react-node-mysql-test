import React, { useState, useContext } from 'react';
import logo from '../../assets/image/logos/saint_logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

import { AuthContext } from '../../contexts/AuthContext';

import {
    HeaderContainer,
    HeaderLogo,
    ToggleMenu,
    NavItems,
    NavLinks,
    NavLink,
    NavLinkR,
    ButtonLogin,

} from './Header.Styles';

const Header = ({ page="home" }) => {

    const { currentUser, userLogout } = useContext(AuthContext);
    const [showMobileMenu, SetShowMobileMenu] = useState(false);

    const handleShowToggleMenu = () => {
        SetShowMobileMenu(!showMobileMenu)
    }

    const handleLogOut = async () => {
        try {
            await userLogout(currentUser);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <HeaderContainer>
                <HeaderLogo to='/'>
                    <img src={logo} alt="Logo" />
                </HeaderLogo>

                <NavItems onClick={handleShowToggleMenu} showToggleMenu={showMobileMenu} >
                    {!currentUser.email && page === 'landing' &&
                        <>
                            <NavLinks><NavLink to='home' onClick={handleShowToggleMenu} >Inicio</NavLink></NavLinks>
                            <NavLinks><NavLink to='about' onClick={handleShowToggleMenu} >Nosotros</NavLink></NavLinks>
                            <NavLinks><NavLink to='service' onClick={handleShowToggleMenu} >Servicios</NavLink></NavLinks>
                            <NavLinks><NavLink to='project' onClick={handleShowToggleMenu} >Contacto</NavLink></NavLinks>
                        </>
                    }

                    {!currentUser.email && page === 'login' &&
                        <>
                            <NavLinks><ButtonLogin to='/' onClick={handleShowToggleMenu} >Inicio</ButtonLogin></NavLinks>
                        </>
                    }

                    {currentUser.email && 
                        <>
                            <NavLinks><NavLinkR to='/clientes' onClick={handleShowToggleMenu} >Inicio</NavLinkR></NavLinks>
                            <NavLinks><NavLinkR to='/recibos' onClick={handleShowToggleMenu}> Recibos</NavLinkR></NavLinks>
                            <NavLinks><NavLink to='estadisticas' onClick={handleShowToggleMenu} >Estadisticas </NavLink></NavLinks>
                        </>
                    }
                    {currentUser.email
                        ? <NavLinks><ButtonLogin to='/' onClick={handleLogOut} >Cerrar sesión</ButtonLogin></NavLinks>    
                        : (page !== 'login' &&
                            <>
                                    <NavLinks><ButtonLogin to='/login' onClick={handleShowToggleMenu} >Ingresar</ButtonLogin></NavLinks>    
                            </>
                        )
                    }   
                </NavItems>
                
                <ToggleMenu onClick={handleShowToggleMenu}>
                    {showMobileMenu ? <FaTimes /> : <FaBars />} 
                </ToggleMenu>
            </HeaderContainer>
        </>
    )
}

export default Header
