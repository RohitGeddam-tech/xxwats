import React, { useState, useEffect } from 'react'
import './css/Nav.css'
import { Squash as Hamburger } from 'hamburger-react';
import { NavHashLink } from 'react-router-hash-link';
import Svg from '../components/Svg'

const TestNav = () => {
    const [isActive, setActive] = useState(true);

    let colored = isActive ? 'collapse-nav' : 'nav'
    let header =  isActive ? 'headerfull' : 'header'
    return (
        <>
            <div className={colored}>
                <div className={header}>
                    {isActive ? 
                        <nav className='container-fullnav'>
                        <div className='nav-image'>
                            <NavHashLink to='/xxwats#top'><Svg className={'black'} imagegradient0={'yellow-gradient-0'} 
                             imagegradient1={'yellow-gradient-1'}
                             imagename={'yellow'}/></NavHashLink>
                        </div>
                        <div className='fade'>
                            {/* <div className='fadein'> */}
                                <NavHashLink to='/xxwats#top' className='navdeskfade'>Home</NavHashLink>
                                <NavHashLink to='/xxwats/about#top' className='navdeskfade'>About us</NavHashLink>
                                <NavHashLink to='/xxwats/contact#top' className='navdeskfade'>Contact us</NavHashLink>
                            {/* </div> */}
                        </div>
                        </nav> :
                        <nav className='container-nav'>
                        <div className='nav-image'>
                            <NavHashLink to='/xxwats#top'><Svg className={'pink'} imagegradient0={'yellow-gradient-0'} 
                             imagegradient1={'yellow-gradient-1'}
                             imagename={'yellow'}/></NavHashLink>
                        </div>
                        </nav>
                    }
                    <div className='nav-links'>
                        <Hamburger direction='left' className='ham' duration={0.4} color='#202020' toggled={isActive} toggle={setActive} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestNav
