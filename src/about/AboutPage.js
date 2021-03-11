import React from 'react'
import Hireabout from './HireAbout'
import Nav from '../components/Nav'
import FirstAbout from './FirstAbout'
import Middle from './Middle'
import '../App.css'

const View = () => {
    return(
      <>
        <Nav />
        <section>
           <FirstAbout />
        </section>
        <section>
           <Middle />
        </section>
        <section>
          <Hireabout />
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
