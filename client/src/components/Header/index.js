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
    ButtonLogin,

} from './Header.Styles';

const Header = ({ page="landing" }) => {

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
                    {currentUser.email && 
                        <>
                            <NavLinks><NavLink to='home' onClick={handleShowToggleMenu} >Inicio</NavLink></NavLinks>
                            <NavLinks><NavLink to='recibos' onClick={handleShowToggleMenu}> Recibos</NavLink></NavLinks>
                            <NavLinks><NavLink to='estadisticas' onClick={handleShowToggleMenu} >Estadisticas </NavLink></NavLinks>
                        </>
                    }
                    {currentUser.email
                        ? <NavLinks><ButtonLogin to='/' onClick={handleLogOut} >Cerrar sesión</ButtonLogin></NavLinks>    
                        : (<>
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
