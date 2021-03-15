import React, { useState,useEffect } from 'react'
import logowide from './img/logo/logo-wide.svg'
import './components/css/Nav.css'
import { Squash as Hamburger } from 'hamburger-react';
import { Collapse } from '@material-ui/core';
import { NavHashLink } from 'react-router-hash-link';
import { Fade } from 'react-animation-components'
import Svg from './components/Svg'

const Nav = () => {
    const [isActive, setActive] = useState(false);

    let colored = isActive ? 'collapse-navbar' : 'navbar'
    return (
        <>
            <div className={colored}>
                <header>
                    <nav className='container-nav'>
                        <div className='nav-image'>
                        {isActive ? <NavHashLink to='/xxwats#top'>
                            <Svg 
                            className={'black'} 
                            imagegradient0={'yellow-gradient-0'} 
                            imagegradient1={'yellow-gradient-1'}
                            imagename={'yellow'}
                            /></NavHashLink>
                             : <NavHashLink to='/xxwats#top'><Svg className={'pink'} imagegradient0={'black-gradient-0'} 
                             imagegradient1={'black-gradient-1'}
                             imagename={'black'}/></NavHashLink>}
                        </div>
                        <div className='nav-links'>
                            <Hamburger direction='left' className='ham' duration={0.4} color='black' toggled={isActive} toggle={setActive} />
                        </div>
                    </nav>
                </header>
                <Collapse in={isActive}>
                    <div className='fade' >
                        <Fade in={isActive}  className='fadein' enterOpacity={0.35} delay='500'>
                            <NavHashLink to='/xxwats#top' className='navfade'>Home</NavHashLink>
                        </Fade>
                        <Fade in={isActive} className='fadein' enterOpacity={0.35} delay='1500'>
                            <NavHashLink to='/xxwats/about#top' className='navfade'>About us</NavHashLink>
                        </Fade>
                        <Fade in={isActive} className='fadein' enterOpacity={0.35} delay='2500'>
                            <NavHashLink to='/xxwats/contact#top' className='navfade'>Contact us</NavHashLink>
                        </Fade>
                    </div>
                </Collapse>
            </div>
        </>
    )
}

const NavDesk = () => {
    const [isActive, setActive] = useState(false);

    let colored = isActive ? 'collapse-navbar' : 'navbar'
    return (
        <>
            <div className={colored}>
                <header>
                    <nav className='container-nav'>
                        <div className='nav-image'>
                        {isActive ? <NavHashLink to='/xxwats#top'><Svg className={'black'} imagegradient0={'yellow-gradient-0'} 
                            imagegradient1={'yellow-gradient-1'}
                            imagename={'yellow'}/></NavHashLink>
                             : <NavHashLink to='/xxwats#top'><Svg className={'pink'} imagegradient0={'black-gradient-0'} 
                             imagegradient1={'black-gradient-1'}
                             imagename={'black'}/></NavHashLink>}
                        </div>
                        <div className='nav-links'>
                            <Hamburger direction='left' className='ham' duration={0.4} color='black' toggled={isActive} toggle={setActive} />
                        </div>
                    </nav>
                </header>
                <Collapse in={isActive}>
                    <div className='fade' >
                        <Fade in={isActive}  className='fadein' enterOpacity={0.35} delay='500'>
                            <NavHashLink to='/xxwats#top' className='navdeskfade'>Home</NavHashLink>
                        </Fade>
                        <Fade in={isActive} className='fadein' enterOpacity={0.35} delay='1500'>
                            <NavHashLink to='/xxwats/about#top' className='navdeskfade'>About us</NavHashLink>
                        </Fade>
                        <Fade in={isActive} className='fadein' enterOpacity={0.35} delay='2500'>
                            <NavHashLink to='/xxwats/contact#top' className='navdeskfade'>Contact us</NavHashLink>
                        </Fade>
                    </div>
                </Collapse>
            </div>
        </>
    )
}


const Navbar = () => {
    const[isMobile, setMobile] = useState(
        window.matchMedia('(max-width:850px)').matches
    );
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setMobile(window.matchMedia('(max-width:850px)').matches)
        })
    })
    return(
        <>{isMobile ? <Nav /> : <NavDesk />}</>
    )
}

export default Navbar
