import React,{useState, useEffect} from 'react'
import HireDesk from '../components/HireDesk'
import HireMob from '../components/HireMob'
import '../home/css/Hire.css'

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
        <div className='hireabout'>
            {isMobile ? <HireMob /> : <HireDesk /> }
        </div>
    )
}

export default Hire