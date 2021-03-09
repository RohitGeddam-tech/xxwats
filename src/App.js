import './App.css';
import Nav from './components/Nav'
import Intro from './home/Intro'
import About from './home/About'
import Services from './home/Services'
import Hire from './home/Hire'

const View = () => {
  return(
    <>
      <Nav />
      <section>
        <Intro />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Hire />
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
