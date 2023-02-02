import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/sections/Navbar'

const PrimaryLayout = () => {
  return (
    <>
    <Navbar />
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default PrimaryLayout