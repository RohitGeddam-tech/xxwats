import React from 'react'
import './App.css'
import Hire from './home/Hire'
import Nav from './NavBar'

const View = () => {
    return(
      <>
        <Nav />
        <section style={{paddingTop:'50px'}}>
           <Hire />
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
