
import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Pagetransaction from '../components/pageTransaction/Pagetransaction'
import StairEfffect from '../components/pageTransaction/StairEfffect'

function Layout() {
  return (
    <main className='w-full'>
      <Header/>
        <StairEfffect/>
        <Pagetransaction children/>
            
        <Outlet/>
    </main>
  )
}

export default Layout
