 
import './App.css'
import Habits from './components/Habits'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Run from './components/Run'

function App() {
 

  return (
   <div className='bg-black'>
    <Navbar></Navbar>
    <Hero></Hero>
    <Habits></Habits>
    <Run></Run>
   </div>
  )
}

export default App
