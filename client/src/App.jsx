import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Footer } from 'flowbite-react'

function App() {

  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
      <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
