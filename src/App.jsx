 
import './App.css'
import Habits from './components/Habits'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
 

  return (
   <div className='bg-black'>
    <Navbar></Navbar>
    <Hero></Hero>
    <Habits></Habits>
   </div>
  )
}

export default App
