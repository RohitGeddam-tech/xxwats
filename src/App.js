import React,{useEffect} from 'react'
import './App.css';
import Nav from './components/Nav'
import Intro from './home/Intro'
import About from './home/About'
import Services from './home/Services'
import Hire from './home/Hire'
import Aos from 'aos'
import 'aos/dist/aos.css'

const View = () => {

  useEffect(() => {
    Aos.init({duration:2000});
  })

  return(
    <>
      <Nav />
      <section>
        <Intro />
      </section>
      <section>
      <div data-aos="zoom-in-down">
        <About />
      </div>
      </section>
      <section>
      <div data-aos="zoom-in-down">
        <Services />
      </div>
      </section>
      <section>
      <div data-aos="zoom-in-down">
        <Hire />
      </div>
      </section>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <View />
    </div>
  );
}

export default App;
