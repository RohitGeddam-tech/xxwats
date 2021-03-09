import './App.css';
import Nav from './components/Nav'
import Intro from './home/Intro'
import About from './home/About'
import Services from './home/Services'

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
