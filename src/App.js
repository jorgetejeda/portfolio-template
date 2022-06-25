import './App.css'
import Experience from './components/Experience/Experience'
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
    </div>
  )
}

export default App