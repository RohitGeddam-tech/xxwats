import React,{useState} from 'react'
import { Fade } from 'react-animation-components'
import './Middle.css'

import icon from '../img/icons/icon-expand--before.svg'
import icona from '../img/icons/icon-expand--after.svg'
import cyril from '../img/team/cyril.png'
import savio from '../img/team/savio.png'
import arathi from '../img/team/arathi.png'
import ansh from '../img/team/ansh.png'
import anushree from '../img/team/anushree.png'
import saloni from '../img/team/saloni.png'

const MidDesktop = () => {

    const [active, setActive] = useState(false)
    const [Saloni, setSaloni] = useState(false)
    const [Ansh, setAnsh] = useState(false)
    const [Arathi, setArathi] = useState(false)
    const [Savio, setSavio] = useState(false)
    const [Cyril, setCyril] = useState(false)

    // const [afterActive, setAfterActive] = useState(true)

    const cls = active ? 'cls' : 'innerdiv'
    const box = active ? 'box' : 'cls'

    const salonibox = Saloni ? 'rightbox' : 'cls'
    const innersal = Saloni ? 'cls' : 'innerdiv'

    const anshBox = Ansh ? 'rightbox' : 'cls'
    const inneransh = Ansh ? 'cls' : 'innerdiv'

    const innerara = Arathi ? 'cls' : 'innerdiv'
    const araBox = Arathi ? 'box' : 'cls'

    const innercyril = Cyril ? 'cls' : 'innerdiv'
    const cyrilbox = Cyril ? 'box' : 'cls'

    const saviobox = Savio ? 'rightbox' : 'cls'
    const innersavio = Savio ? 'cls' : 'innerdiv'

    return (
        <>
          <div className='Mid-container'>
                <div className='mid-title'>
                    <h4 className='first-title'>Meet the team</h4>
                </div>
                <div className='first-flexbox animate__animated animate__slideInDown animate__delay-2s'>
                    <div className='mid-title'>
                        <h4 className='flex-title'>Founders</h4>
                    </div>
                    <div className='first-flex' >
                        <div className='inflex1 animate__animated animate__fadeInRight animate__delay-3s'>
                            <div className={innercyril}>
                                <img src={cyril} alt='logo' />
                                <h4 className='flexbox-title'>cyril <img onClick={()=>{setCyril(true)}} src={icon} alt='logo' /></h4>
                            </div>
                            <Fade className={cyrilbox} in={Cyril} delay='500' duration='2000'>
                                    <div className='fadebox'>
                                        <p>
                                        Cyril's spent the past 21 years establishing his credentials in Management, Creative & Production. He has created branded content for Radio, Television & Digital while working with the likes of the TOI’s Entertainment unit, Red FM, Channel V and more. His last stint with O4 Digital - Group M, led to him breaking barriers on the digital platform. He has now blended his content and production expertise with technology, allowing him to be the creative firepower of 20 watts.
                                        </p>
                                        <h4 className='flexbox-title'>Anushree <img onClick={()=>{setCyril(false)}} src={icona} alt='logo' /></h4>
                                    </div>
                            </Fade>
                        </div>
                        <div className='inflex2 animate__animated animate__fadeInLeft animate__delay-3s'>
                            <div className={innersavio}>
                            <img src={savio} alt='logo' />
                                <h4 className='flexbox-title'>savio <img onClick={()=>{setSavio(true)}} src={icon} alt='logo' /></h4>
                            </div>
                            <Fade className={saviobox} in={Savio} delay='500' duration='2000'>
                                    <div className='fadebox'>
                                        <p>
                                        Savio, an expert at his craft but a tech geek at heart with over 20 years of experience in the media industry on the technical as well as editorial front, starting with IN Mumbai News Channel in 2001. He has worked with reputed organisations like Sahara Networks and Network 18. With his ventures Beanstalk Productions and Mad Hatter Media Pvt. Ltd., he has consistently delivered quality services to all major television networks and digital platforms. 
                                        </p>
                                        <h4 className='flexbox-title'>Anushree <img onClick={()=>{setSavio(false)}} src={icona} alt='logo' /></h4>
                                    </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className='first-flexbox animate__animated animate__slideInDown animate__delay-2s'>
                    <div className='mid-title'>
                        <h4 className='flex-title'>Creative team</h4>
                    </div>
                    <div className='first-flex' >
                        <div className='inflex1 animate__animated animate__fadeInRight animate__delay-4s'>
                            <div className={innerara}>
                            <img src={arathi} alt='logo' />
                                <h4 className='flexbox-title'>arathi <img onClick={()=>{setArathi(true)}} src={icon} alt='logo' /></h4>
                            </div>
                            <Fade className={araBox} in={Arathi} delay='500' duration='2000'>
                                    <div className='fadebox'>
                                        <p>
                                        She Started with Channel [v], attended New York Film Academy to study Producing for Film & TV and then pulled a ‘Swades’ on everybody. She returned to her motherland to create cool content for digital mediums. If there was an award for ‘Shining Personalities’, Arathi would surely be the runner up. But if we are really being honest about her, she is a creative powerhouse and nothing short of a goofy rockstar!
                                        </p>
                                        <h4 className='flexbox-title'>Anushree <img onClick={()=>{setArathi(false)}} src={icona} alt='logo' /></h4>
                                    </div>
                            </Fade>
                        </div>
                        <div className='inflex2 animate__animated animate__fadeInLeft animate__delay-4s'>
                            <div className={inneransh}>
                            <img src={ansh} alt='logo' />
                                <h4 className='flexbox-title'>Ansh <img onClick={()=>{setAnsh(true)}} src={icon} alt='logo' /></h4>
                            </div>
                            <Fade className={anshBox} in={Ansh} delay='500' duration='2000'>
                                    <div className='fadebox'>
                                        <p>
                                        Savio, an expert at his craft but a tech geek at heart with over 20 years of experience in the media industry on the technical as well as editorial front, starting with IN Mumbai News Channel in 2001. He has worked with reputed organisations like Sahara Networks and Network 18. With his ventures Beanstalk Productions and Mad Hatter Media Pvt. Ltd., he has consistently delivered quality services to all major television networks and digital platforms. 
                                        </p>
                                        <h4 className='flexbox-title'>Anushree <img onClick={()=>{setAnsh(false)}} src={icona} alt='logo' /></h4>
                                    </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className='first-flexbox animate__animated animate__slideInDown animate__delay-2s'>
                    <div className='mid-title'>
                        <h4 className='flex-title'>Business team</h4>
                    </div>
                    <div className='first-flex' >
                        <div className='inflex1 animate__animated animate__fadeInRight animate__delay-5s'>
                            <div className={cls}>
                                <img src={anushree} alt='logo' />
                                <h4 className='flexbox-title'>Anushree <img onClick={()=>{setActive(true)}} src={icon} alt='logo' /></h4>
                            </div>
                            <Fade className={box} in={active} delay='500' duration='2000'>
                                    <div className='fadebox'>
                                        <p>
                                        Latest addition to the 20 watts family, she handles recruitments and business management and expansions. She comes with 12+ years of experience in advertising and production since she started working when she was 17 and claims she hasn’t taken a sick day ever since. She has worked with agencies like Ogilvy, Contract, Alok Nanda and Company, Havas Creative, TBWA and more.  She also experiments with curly hair products, has the loudest laugh in the room and loves to travel every chance she gets.
                                        </p>
                                        <h4 className='flexbox-title'>Anushree <img onClick={()=>{setActive(false)}} src={icona} alt='logo' /></h4>
                                    </div>
                            </Fade>
                        </div>
                        <div className='inflex2 animate__animated animate__fadeInLeft animate__delay-5s'>
                            <div className={innersal}>
                            <img src={saloni} alt='logo' />
                            <h4 className='flexbox-title'>saloni <img onClick={()=>{setSaloni(true)}} src={icon} alt='logo' /></h4>
                            </div>
                            <Fade className={salonibox} in={Saloni} delay='500' duration='2000'>
                                    <div className='fadebox'>
                                        <p>
                                        A veteran at 20 watts, Saloni Shah is a client's dream. Every request is a yes and every 2am call answered, that's how she paves her way into a client's heart. Her sweetness is her strength and her weakness, and we don't say this because she's a Gujrati. She can be found in the nearest Starbucks conquering the world in her 6inch heels. Also, if you know her, you've definitely asked her for the bomb thepla recipe.
                                        </p>
                                        <h4 className='flexbox-title'>Saloni <img onClick={()=>{setSaloni(false)}} src={icona} alt='logo' /></h4>
                                    </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className='midend-title'>
                    <h4 className='flexend-title'>Meet the team</h4>
                    <p className='flexpara'>
                    This is the real deal. The team that makes the dream a reality. A passionate group of highly skilled and driven people who constantly talk about giving their 110 percent but we remind them that their 100 percent would suffice. We have a team of 20+ in the production department and an equally large team in the post production studio. All brilliant and all good at making what’s on paper, a reality.
                    </p>
                </div>
           </div>  
        </>
    )
}

export default MidDesktop