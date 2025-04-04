import React from 'react'
import { img } from '../assets'
import Button from '../Components/Button';

const Home = () => {
  return (
    <>


      <div className="w-full mt-10 max-w-screen-lg flex justify-between ">
        
        {/* Hero Section */}
        <div className=" w-full max-w-screen-lg lg:flex lg:flex-row flex-col flex items-center justify-center">
          {/* Left Content */}
          <div className="flex justify-center p-2 flex-col space-y-4 max-w-lg">
            <h1 className="md:text-6xl text-4xl font-extrabold leading-tight">
              Take Control <br /> of <span className="text-blue-400">Your Money</span>
            </h1>
            <p className="md:text-xl text-lg text-gray-600 text-wrap">
              Personal budgeting is the secret to financial <br /> freedom.
              Start your journey today.
            </p>

            {/* Input Field */}
            <input
              type="text"
              className="border border-gray-300 p-3 rounded w-[350px] focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="What is your name?"
            />

            {/* Buttons */}
            <div className=" flex ">
              <div className="inline-block border border-transparent rounded">
                <Button
                  label="Get Started"
                  imgSrc={img.arrow}
                  // onClick={() => { }}
                />
        
              </div>
            </div>


          </div>

          {/* Right Illustration */}
          <div className="">
            <img className="md:w-[500px] h-[400px]" src={img.illstration} alt="Illustration" />
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Home;
