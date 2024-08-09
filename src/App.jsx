import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from './layout/Layout'
import Header from './components/Header'
import Service from './components/menu/Service'
import Home from './components/menu/Home'
import Resume from './components/menu/Resume'
import Contact from './components/menu/Contact'
import Portfolio from './components/menu/Portfolio'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path="/service" element={<Service/>}/> 
      <Route path="/resume" element={<Resume/>}/> 
      <Route path="/contact" element={<Contact/>}/> 
      <Route path="/portfolio" element={<Portfolio/>}/>         
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
