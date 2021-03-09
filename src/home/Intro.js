import React,{useState, useEffect} from 'react'
import './css/Intro.css'
import home from '../img/logo/logo-tall.svg'

const DeskIntro = () => {
    return(
            <div className='container'>
                <div className='home'>
                    <div className='image'>
                        <img src={home} alt='logo' />
                    </div>
                    <div className='content'>
                        <p className='para'>
                            WE GIVE CREATIVE SOLUTIONS FOR YOUR PROBLEMS
                        </p>
                        <button className='btn'>Check Out Our Portfolio</button>
                    </div>
                </div>
            </div>
    )
}

const MobIntro = () => {
    return (
        <div className='container'>
                <div className='mobhome'>
                    <div className='mobimage'>
                        <img src={home} alt='logo' />
                    </div>
                    <div className='mobcontent'>
                        <p className='mobpara'>
                            WE GIVE CREATIVE SOLUTIONS FOR YOUR PROBLEMS
                        </p>
                        <button className='mobbtn'>Check Out Our Portfolio</button>
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

    return (
        <div className='Intro'>
            {isMobile ? <MobIntro /> : <DeskIntro />}
        </div>
    )
}

export default Intro
