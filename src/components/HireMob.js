import React,{useEffect} from 'react'
import call from '../img/icons/icon-call.svg'
import map from '../img/icons/icon-maps.svg'
import mail from '../img/icons/icon-mail.svg'
import insta from '../img/icons/icon-instagram.svg'
import youtube from '../img/icons/icon-youtube.svg'
import facebook from '../img/icons/icon-facebook.svg'
import twitter from '../img/icons/icon-twitter.svg'
import home from '../img/logo/logo-tall.svg'

import Service from '../components/ServiceSlider'
import Form from '../components/Form'
import Aos from 'aos'
import 'aos/dist/aos.css'

const HireMob = () => {

    useEffect(() => {
        Aos.init({duration:2500});
    })


    return (
        <>
            <div className='title-container'>
                <h4 className='first-title'>hire us</h4>
            </div>
            <div className='hire-mobcontainer'>
                <div className='second-mobbox' data-aos="fade-up" data-aos-duration="3500">
                    <div className='second-mobbox-container'>
                        <h4 className='second-title'>A project with 20 Watts?</h4>
                        <h4 className='second-quote'>We'd love to hear about it! </h4>
                        {/* <div className='service-slider'>
                            <h4 className='service-title'>Services</h4>
                            <Service />
                        </div> */}
                        <div className='service-form'>
                            <Form />
                        </div>
                    </div>
                </div>
                <div className='first-mobbox' data-aos="zoom-in-up" data-aos-duration="3500">
                    <div className='first-box-mobcontainer'>
                        <h4 style={{paddingTop:'30px'}} className='first-quote'>Drop by for a cup of kadak chai</h4>
                        <div className='mobicons'>
                            <div className='icons-mobmsg'>
                                <a href='https://goo.gl/maps/G9r5WEvrA2cfQ9Z18' style={{width:'50%'}} className='location-title'>37/B, Perry Cross Rd, 
                                    Bandra West, Mumbai, 
                                    Maharashtra, India,
                                    400050
                                </a>
                                <a href='https://goo.gl/maps/G9r5WEvrA2cfQ9Z18'><img alt='call' src={map} /></a>
                            </div>
                            <div className='icons-mobmsg'>
                                <a style={{marginTop:'10px'}} href='tel:+919820353013' className='call-title'>
                                    +919820353013
                                </a>
                                <a href='tel:+919820353013'><img alt='call' src={call} /></a>
                            </div>
                            <div style={{marginTop:'30px'}} className='icons-mobmsg'>
                                <a href='mailto:wattsup@xxwatts.com' className='mail-title'>
                                    wattsup@xxwatts.com
                                </a>
                                <a href='mailto:wattsup@xxwatts.com'><img alt='call' src={mail} /></a>
                            </div>
                        </div>
                        <div className='follow'>
                            <h4 className='first-title'>follow us</h4>
                            <div className='social'>
                                <a style={{marginLeft:'10px'}}><img src={insta} alt='insta' /></a>
                                <a style={{marginLeft:'10%'}}><img src={youtube} alt='insta' /></a>
                                <a style={{marginLeft:'10%'}}><img src={facebook} alt='insta' /></a>
                                <a style={{marginLeft:'10%'}}><img src={twitter} alt='insta' /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mobhome' data-aos="fade-down" data-aos-duration="5000">
                    <div className='mobimage'>
                        <img src={home} alt='logo' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HireMob
