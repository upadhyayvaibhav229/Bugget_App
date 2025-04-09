import React from 'react'
import { img } from '../assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate
  return (
     <div className="w-full max-w-screen-lg flex justify-between p-10">
     <div className="flex items-center gap-x-2">
       <img className="h-[40px] w-[40px]" src={img.logo} alt="logo" />
       <h1 className="text-3xl font-bold cursor-pointer">HomeBudget</h1>
     </div>
   </div>
  )
}

export default Navbar
