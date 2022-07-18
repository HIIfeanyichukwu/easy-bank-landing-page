import './App.css'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import Mid from './components/Mid'
import Outro from './components/Outro'
import Footer from './components/Footer'



function App() {

  return (
    <div className="App">
     <div className="container">
        <header>
          <NavBar/>
        </header>
        <main>
          <Intro />
          <Mid/>
          <Outro/>
        </main>
        <footer>
          <Footer/>
        </footer>
     </div>
    </div>
  )
}

export default App
