import React,{useEffect} from 'react'
import Hireabout from './HireAbout'
import Nav from '../components/Nav'
import FirstAbout from './FirstAbout'
import Middle from './Middle'
import '../App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const View = () => {
  
  useEffect(() => {
    Aos.init({duration:1000});
  })

    return(
      <>
        <Nav />
        <section>
          <div data-aos="fade-down" data-aos-duration="3000">
            <FirstAbout />
          </div>
        </section>
        <section>
          <div data-aos="fade-down" data-aos-duration="3000">
            <Middle />
          </div>
        </section>
        <section>
          <div data-aos="fade-up" data-aos-duration="3000">
            <Hireabout />
          </div>
        </section>
      </>
    )
  }

const AboutPage = () => {
    return (
        <div className='App'>
            <View />
        </div>
    )
}

export default AboutPage
