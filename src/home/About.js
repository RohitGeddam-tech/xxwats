import React,{useEffect, useState} from 'react'
import './css/about.css'
import Slider from '../components/Sliding'

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
                <iframe  
                    allowFullScreen
                    frameBorder='0' 
                    width="65%" 
                    src="https://www.youtube.com/embed/kJQP7kiw5Fk?autoplay=1" 
                    title='vid'
                    className='vid'
                />
            </div>
            </div>
            <div className='sliderbox'>
                <div className='slider'>
                    <Slider />
                </div>
                <div className='slidercover'>
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
    return(
        <div className='aboutmobile'>
            <div className='mobcontainer'>
                <h4 className='mobheading'>work</h4>
                <h4 className='mobh1'>We do stuff.</h4>
                <iframe  
                    allowFullScreen
                    frameBorder='0' 
                    width="100%"
                    height='550px' 
                    src="https://www.youtube.com/embed/kJQP7kiw5Fk?autoplay=1" 
                    title='vid'
                    className='vid'
                />
                <Slider />
                <button className='mobbtn'>Check Out Our Portfolio</button>
            </div>            
        </div>
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
            {isMobile ? <Mobile /> : <Desktop />}
        </div>
    )
}

export default About
