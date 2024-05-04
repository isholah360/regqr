
import './App.css'
import Footer from './component/footer/footer'
import Form from './component/form/form'
import Navbar from './component/navbar/navbar'
import { Outlet, Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
    <Navbar/>
      <Outlet/>
    <Footer/>
    </>
  )
}

export default App
