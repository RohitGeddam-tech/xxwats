import React,{useState, useEffect} from 'react'
import HireDesk from '../components/HireDesk'
import HireMob from '../components/HireMob'
import './css/Hire.css'


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
            {isMobile ? <HireMob /> : <HireDesk /> }
        </div>
    )
}

export default Hire
