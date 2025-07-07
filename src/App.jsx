import About from './sections/About'
import Navbar from './components/Navbar'
import './style.css'
import Home from './sections/Home'
import Footer from './components/Footer'
import Portfolio from './sections/Portfolio'

function App() {

  return (
    <>
      {/* <Navbar/> */}
      <Home/>
      <Portfolio/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
