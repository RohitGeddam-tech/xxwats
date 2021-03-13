import React, { useState } from 'react'
import logowide from './img/logo/logo-wide.svg'
import './components/css/Nav.css'
import { Squash as Hamburger } from 'hamburger-react';
import { Collapse } from '@material-ui/core';
import { NavHashLink } from 'react-router-hash-link';
import { Fade } from 'react-animation-components'

const Nav = () => {
    const [isActive, setActive] = useState(false);

    let colored = isActive ? 'collapse-navbar' : 'navbar'
    return (
        <>
            <div className={colored}>
                <header>
                    <nav className='container-nav'>
                        <div className='nav-image'>
                            <NavHashLink to='/xxwats' ><img src={logowide} alt='logo' /></NavHashLink>
                        </div>
                        <div className='nav-links'>
                            <Hamburger direction='left' className='ham' duration={0.4} color='black' toggled={isActive} toggle={setActive} />
                        </div>
                    </nav>
                </header>
                <Collapse in={isActive}>
                    <div className='fade' >
                        <Fade in={isActive} enterOpacity={0.25} delay='500'>
                            <NavHashLink to='/xxwats' className='navfade'>Home</NavHashLink>
                        </Fade>
                        <Fade in={isActive} enterOpacity={0.25} delay='1500'>
                            <NavHashLink to='/xxwats/about' className='navfade'>About us</NavHashLink>
                        </Fade>
                        <Fade in={isActive} enterOpacity={0.25} delay='2500'>
                            <NavHashLink to='/xxwats/contact' className='navfade'>Contact us</NavHashLink>
                        </Fade>
                    </div>
                </Collapse>
            </div>
        </>
    )
}

export default Nav