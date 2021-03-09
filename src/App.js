import './App.css';
import Nav from './components/Nav'
import Intro from './home/Intro'
import About from './home/About'

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
