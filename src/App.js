import './App.css'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Works from './components/Works/Works'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App