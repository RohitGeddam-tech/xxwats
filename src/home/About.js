import React,{useEffect, useState} from 'react'
import './css/about.css'
import Slider from '../components/Sliding'
import Aos from 'aos'
import 'aos/dist/aos.css'
import desk from '../img/reel-desktop.jpg'
import mob from '../img/reel-mobile.jpg'
import play from '../img/icons/icon-play.svg'
import { Fade } from 'react-animation-components'


const Desktop = () => {

    const [active, setActive] = useState(false)

    useEffect(() => {
        Aos.init({duration:2500});
    })

    const imag = active ? 'frame' : 'imag' 

    const ifade = active ? 'ifade' : 'frame' 

    const iconplay = active ? 'frame' : 'iconplay'

    const center =  active ? 'frame' : 'center'

    return (
        <>
            <div className='aboutfirst'>
            <div className='yellowtab' data-aos="flip-down" data-aos-duration="2700">
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
            <div className='aboutvideo' data-aos="zoom-in-down" data-aos-duration="3100">
                <img src={desk} alt='reel' className={imag} onClick={()=>{setActive(true)}}/>
                <div className={center}>
                    <img src={play} alt='play' className={iconplay} onClick={()=>{setActive(true)}}/>
                </div>
                <Fade className={ifade} in={active} delay='500'>
                    <iframe  
                        allowFullScreen
                        frameBorder='0' 
                        width="100%"
                        height='100%' 
                        src="https://www.youtube.com/embed/kJQP7kiw5Fk?autoplay=1&mute=1" 
                        title='vid'
                        className='vid'
                    />
                </Fade>
            </div>
            </div>
            <div className='sliderbox'>
                <div className='slider' data-aos="zoom-in" data-aos-duration="4000">
                    <Slider />
                </div>
                <div className='slidercover' data-aos="fade-down-left" data-aos-duration="3300">
                    <div className='slidecontainer'>
                        <h4 className='sliderheading'>work</h4>
                        <h4 className='sliderh1'>We do stuff.</h4>
                        <button className='sliderbtn'>Check Out Our Portfolio</button>
                    </div>
                </div>
            </div>
        </>
        
    )
}

const Mobile = () => {

    const [active, setActive] = useState(false)

    useEffect(() => {
        Aos.init({duration:2500});
    })

    const imag = active ? 'frame' : 'pict' 

    const ifade = active ? 'fade' : 'frame' 

    const iconplay = active ? 'frame' : 'mobplay'

    const center =  active ? 'frame' : 'center'

    const container =  active ? 'mob-frame' : 'mob-container'

    return(
        <div className='aboutmobile'>
            <div className='mobcontainer' data-aos="fade-up" data-aos-duration="2700">
                <h4 className='mobheading'>work</h4>
                <h4 className='mobh1'>We do stuff.</h4>
                <img src={mob} className={imag} alt='reel' onClick={()=>{setActive(true)}}/>
                <div className={center}>
                    <img src={play} alt='play' className={iconplay} onClick={()=>{setActive(true)}}/>
                </div>
                <Fade className={ifade} in={active} delay='500'>
                    <iframe  
                        allowFullScreen
                        frameBorder='0' 
                        width="100%"
                        height='300px' 
                        src="https://www.youtube.com/embed/kJQP7kiw5Fk?autoplay=1&mute=1" 
                        title='vid'
                        className='vid'
                    />
                </Fade>
                <div className={container} data-aos="zoom-in" data-aos-duration="2700">
                    <Slider />
                </div>
                <button className='mobaboutbtn'>Check Out Our Portfolio</button>
            </div>            
        </div>
    )
}

// <iframe  
//                     allowFullScreen
//                     frameBorder='0' 
//                     width="100%"
//                     height="300px"
//                     src="https://www.youtube.com/embed/kJQP7kiw5Fk?autoplay=1&mute=1" 
//                     title='vid'
//                 />

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
            {isMobile ? <Mobile /> : <Desktop />}
        </div>
    )
}

export default About
