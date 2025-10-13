import './style.css'
import Skills from './sections/Skills'
import Home from './sections/Home'
import Footer from './components/Footer'
import Portfolio from './sections/Portfolio'
import Header from './components/Header'
import About from './sections/About'
import Experience from './sections/Experience'

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Skills/>
      <Footer/>
    </>
  )
}

export default App
