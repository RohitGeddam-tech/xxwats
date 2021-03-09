import React,{useState} from 'react'
import logowide from '../img/logo/logo-wide.svg'
import './css/Nav.css'
import Hamburger from 'hamburger-react';
import { Collapse } from '@material-ui/core';

const Nav = () => {
    const [isActive, setActive] = useState(false);
    return (
        <>
        <Collapse style={{backgroundColor:'red'}} in={isActive}>
            <div>heelo</div>
            <div>heelo</div>
            <div>heelo</div>
            <div>heelo</div>
        </Collapse>
            <div className='nav'>
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
            </div>
        </>
    )
}

export default Nav