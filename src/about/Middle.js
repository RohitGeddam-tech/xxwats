import React,{useEffect, useState} from 'react'
import './Middle.css'
import Middesk from './MidDesktop'
import MidMob from './MidMob';


const Middle = () => {

    const[isMobile, setMobile] = useState(
        window.matchMedia('(max-width:850px)').matches
    );
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setMobile(window.matchMedia('(max-width:850px)').matches)
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
        <div className='middle'>
            {isDesktop ? <>{isMobile ? <MidMob /> : <Middesk /> }</>
            : <div className='largemiddle'>{isMobile ? <MidMob /> : <Middesk /> }</div>}
        </div>
    )
}

export default Middle
