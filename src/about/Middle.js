import React,{useEffect, useState} from 'react'
import './Middle.css'
import Middesk from './MidDesktop'
import MidMob from './MidMob';


const Middle = () => {

    const[isMobile, setMobile] = useState(
        window.matchMedia('(max-width:800px)').matches
    );
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setMobile(window.matchMedia('(max-width:800px)').matches)
        })
    })

    return (
        <div className='middle animate__animated animate__fadeInDown animate__delay-2s'>
            {isMobile ? <MidMob /> : <Middesk /> }
        </div>
    )
}

export default Middle