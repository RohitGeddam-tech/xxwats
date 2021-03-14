import React,{useState, useEffect} from 'react'
import './css/Intro.css'
import {NavHashLink} from 'react-router-hash-link'
import home from '../img/logo/logo-tall.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const DeskIntro = () => {

    useEffect(() => {
        Aos.init({duration:2500});
    })

    return(
        <div className='container'>
            <div className='home'>
                <div className='image' data-aos="fade-right" data-aos-duration="2900">
                    <img src={home} alt='logo' />
                </div>
                <div className='content' data-aos="fade-left" data-aos-duration="2900">
                    <p className='para'>
                        WE GIVE CREATIVE SOLUTIONS FOR YOUR PROBLEMS
                    </p>
                    <NavHashLink to='/xxwats/about' className='btn'>Check Out Our Portfolio</NavHashLink>
                </div>
            </div>
        </div>
    )
}

const MobIntro = () => {

    useEffect(() => {
        Aos.init({duration:2500});
    })

    return (
        <div className='container'>
            <div className='mobhome'>
                <div className='mobimage' data-aos="fade-down" data-aos-duration="2900">
                    <img src={home} alt='logo' />
                </div>
                <div className='mobcontent' data-aos="fade-up" data-aos-duration="2900">
                    <p className='mobpara'>
                        WE GIVE CREATIVE SOLUTIONS FOR YOUR PROBLEMS
                    </p>
                    <NavHashLink to='/xxwats/about' className='mobbtn'>Check Out Our Portfolio</NavHashLink>
                </div>
            </div>
        </div>
    )
}

const Intro = () => {

    const[isMobile, setMobile] = useState(
        window.matchMedia('(max-width:800px)').matches
    );
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setMobile(window.matchMedia('(max-width:800px)').matches)
        })
    })

    const[isDesktop, setDesktop] = useState(
        window.matchMedia('(max-width:1400px)').matches
    );
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setDesktop(window.matchMedia('(max-width:1400px)').matches)
        })
    })

    return (
        <>
            {isDesktop ? <div className='Intro'>
                {isMobile ? <MobIntro /> : <DeskIntro />}
            </div> : <div className='largeIntro'>{isMobile ? <MobIntro /> : <DeskIntro />}</div>}
        </>
    )
}

export default Intro
