import React from 'react'
import { img } from '../assets'
import { useNavigate } from 'react-router-dom'
import Button from './Button'



const Navbar = () => {
  const navigate = useNavigate()
  const handleDeleteUser = () => {
    localStorage.removeItem("userName")
    navigate("/")
  }
  return (
     <div className="w-full flex justify-between p-5">
     <div className="flex items-center gap-x-2">
       <img className="h-[40px] w-[40px]" src={img.logo} alt="logo" />
       <h1 className="text-3xl font-bold cursor-pointer">HomeBudget</h1>
     </div>
     <div>

     {localStorage.getItem("userName") && (
       <Button
         text="Delete User"
         onClick={handleDeleteUser}
         className="bg-red-500 text-white px-4 py-2 rounded-lg"
       
       />
     )}
     </div>
   </div>
  )
}

export default Navbar
