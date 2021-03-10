import React,{useEffect, useState} from 'react'
import logowide from '../img/logo/logo-wide.svg'
import './css/Nav.css'
import {Squash as Hamburger} from 'hamburger-react';
import { Collapse, duration } from '@material-ui/core';
import { NavHashLink } from 'react-router-hash-link';
import {Fade} from 'react-animation-components'

const Color = 'color'

const Nav = () => {
    const [isActive, setActive] = useState(false);

    let colored = isActive ? 'collapse-nav' : 'nav'
    return (
        <>
            <div className={colored}>
                <header>
                    <nav className='container-nav'>
                        <div className='nav-image'>
                            <img src={logowide} alt='logo'></img>
                        </div>
                        <div className='nav-links'>
                            <Hamburger direction='left' className='ham' duration={0.4} color='black' toggled={isActive} toggle={setActive} />
                        </div>
                    </nav>
                </header>
                <Collapse duration='10000' style={{backgroundColor:'#F7008C'}} in={isActive}>
                <div className='fade' >
                    <Fade in={isActive} enterOpacity={0.25} delay='500' duration='2000'>
                        <NavHashLink to='/xxwats' className='navfade'>Home</NavHashLink>
                    </Fade>
                    <Fade in={isActive} enterOpacity={0.25} delay='1500' duration='2000'>
                        <NavHashLink to='/xxwats/about' className='navfade'>About us</NavHashLink>
                    </Fade>
                    <Fade in={isActive} enterOpacity={0.25} delay='2500' duration='2000'>
                        <NavHashLink to='/xxwats' className='navfade'>Contact us</NavHashLink>
                    </Fade>
                </div>
        </Collapse>
            </div>
        </>
    )
}

export default Nav