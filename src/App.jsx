 
import './App.css'
import Bmi from './components/Bmi'
import Exercises from './components/Exercises'
import Footer from './components/Footer'
import Habits from './components/Habits'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Run from './components/Run'
import Team from './components/Team'

function App() {
 

  return (
   <div className='bg-black'>
    <Navbar></Navbar>
    <Hero></Hero>
    <Habits></Habits>
    <Run></Run>
    <Exercises></Exercises>
    <Bmi></Bmi>
    <Team></Team>
    <Footer></Footer>
   </div>
  )
}

export default App
