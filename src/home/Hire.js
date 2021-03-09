import React,{useState, useEffect} from 'react'
import call from '../img/icons/icon-call.svg'
import map from '../img/icons/icon-maps.svg'
import mail from '../img/icons/icon-mail.svg'
import insta from '../img/icons/icon-instagram.svg'
import youtube from '../img/icons/icon-youtube.svg'
import facebook from '../img/icons/icon-facebook.svg'
import twitter from '../img/icons/icon-twitter.svg'

import './css/Hire.css'



const Desktop = () => {
    return(
        <>
            <div className='hire-container'>
                <div className='first-box'>
                    <div className='first-box-container'>
                        <h4 className='first-title'>hire us</h4>
                        <h4 className='first-quote'>Drop by for a cup of kadak chai</h4>
                        <div className='icons'>
                            <div className='icons-msg'>
                                <img alt='call' src={map} />
                                <a href='https://goo.gl/maps/G9r5WEvrA2cfQ9Z18' className='location-title'>37/B, Perry Cross Rd, 
                                    Bandra West, Mumbai, 
                                    Maharashtra, India,
                                    400050
                                </a>
                            </div>
                            <div className='icons-msg'>
                                <img alt='call' src={call} />
                                <a href='tel:+919820353013' className='call-title'>
                                    +919820353013
                                </a>
                            </div>
                            <div className='icons-msg'>
                                <img alt='call' src={mail} />
                                <a href='mailto:wattsup@xxwatts.com' className='mail-title'>
                                    wattsup@xxwatts.com
                                </a>
                            </div>
                        </div>
                        <div className='follow'>
                            <h4 className='first-title'>follow us</h4>
                            <div className='social'>
                                <img style={{marginLeft:'10px'}} src={insta} alt='insta' />
                                <img style={{marginLeft:'10%'}} src={youtube} alt='insta' />
                                <img style={{marginLeft:'10%'}} src={twitter} alt='insta' />
                                <img style={{marginLeft:'10%'}} src={facebook} alt='insta' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='second-box'>
                    <div className='second-box-container'>
                        <h4 className='second-title'></h4>
                        <h4 className='second-quote'>A project with 20 Watts?</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

const Mobile = ()=> {
    return(
        <>
            <div className='hire-mobcontainer'>
                <div className='first-mobbox'>
                    <div className='first-box-container'>
                        <h4 style={{paddingTop:'30px'}} className='first-quote'>Drop by for a cup of kadak chai</h4>
                        <div className='mobicons'>
                            <div className='icons-mobmsg'>
                                <a href='https://goo.gl/maps/G9r5WEvrA2cfQ9Z18' style={{width:'50%'}} className='location-title'>37/B, Perry Cross Rd, 
                                    Bandra West, Mumbai, 
                                    Maharashtra, India,
                                    400050
                                </a>
                                <img alt='call' src={map} />
                            </div>
                            <div className='icons-mobmsg'>
                                <a href='tel:+919820353013' className='call-title'>
                                    +919820353013
                                </a>
                                <img alt='call' src={call} />
                            </div>
                            <div style={{marginTop:'30px'}} className='icons-mobmsg'>
                                <a href='mailto:wattsup@xxwatts.com' className='mail-title'>
                                    wattsup@xxwatts.com
                                </a>
                                <img alt='call' src={mail} />
                            </div>
                        </div>
                        <div className='follow'>
                            <h4 className='first-title'>follow us</h4>
                            <div className='social'>
                                <img style={{marginLeft:'10px'}} src={insta} alt='insta' />
                                <img style={{marginLeft:'10%'}} src={youtube} alt='insta' />
                                <img style={{marginLeft:'10%'}} src={twitter} alt='insta' />
                                <img style={{marginLeft:'10%'}} src={facebook} alt='insta' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='second-box'>
                    <div className='second-box-container'>
                        <h4 className='second-title'></h4>
                        <h4 className='second-quote'>A project with 20 Watts?</h4>
                    </div>
                </div> */}
            </div>
        </>
    )
}

const Hire = () => {
    const[isMobile, setMobile] = useState(
        window.matchMedia('(max-width:760px)').matches
    );
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setMobile(window.matchMedia('(max-width:760px)').matches)
        })
    })

    return (
        <div className='hire'>
            {isMobile ? <Mobile /> : <Desktop /> }
        </div>
    )
}

export default Hire
