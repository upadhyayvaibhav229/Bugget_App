import React, { useRef } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Input from '../Components/Input';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const inputref = useRef();

  // const searchParams = new URLSearchParams(location.search);
  const { name } = useParams();
  return (
    <>
    <div className='p-5 space-y-5'>

      <h1 className=' text-7xl font-bold'>Welcome back, <span className='text-blue-400'>{decodeURIComponent(name)}</span></h1>
      <p className='text-gray-500 text-3xl'>Personal budgeting is the secret to financial freedom.</p>
        <h2 className=' text-2xl'>Create a buget to get Started!</h2>
    </div>
      <div className=' shadow-lg max-w-[800px] ml-5 p-5'>
      <div className='p-3 border'>

        <h1 className='text-lg font-bold'>Create Budget</h1>

        {/* <Input */}
        <Input 
          label = "Bugget Name"
          placeholder = "e.g., Groceries"
          ref={inputref}
          
        />
        
        <Input 
          label = "Amount"
          placeholder = ""
        />
      </div>
      </div>
    </>
  )
}

export default Home
