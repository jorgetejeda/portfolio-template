import './App.css'
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <Services />
    </div>
  )
}

export default App