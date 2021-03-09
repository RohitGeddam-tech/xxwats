import React,{useEffect, useState} from 'react'
import './css/about.css'
import home from '../img/logo/logo-tall.svg'

const Desktop = () => {
    return (
        <>
            <div className='aboutfirst'>
            <div className='yellowtab'>
                <div className='tabcontainer'>
                    <h4 className='heading'>About us</h4>
                    <div>
                    <h4 className='abouth1'>We are champions at ordering food.</h4>
                    
                        <p className='aboutpara'>
                        But when we are not doing that, we are striving for excellence in our work process. We are specialists, not generalists, that work toward building experiences that elevate and empower organisations. Working with you every step of the way to build comprehensive, creative and purpose-driven brands and experiences.
                        </p>
                        <button className='aboutbtn'>Check Out Our Portfolio</button>
                    </div>
                </div>
            </div>
            <div className='aboutvideo'>
                <img src={home} alt='logo' />
            </div>
            </div>
            <div className='sliderbox'>
                <h4 className='sliderheading'>Work</h4>
            </div>
        </>
    )
}

const About = () => {

    const[isMobile, setMobile] = useState(
        window.matchMedia('(max-width:800px)').matches
    );
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setMobile(window.matchMedia('(max-width:800px)').matches)
        })
    })

    return (
        <div className='about'>
            <Desktop />
        </div>
    )
}

export default About
