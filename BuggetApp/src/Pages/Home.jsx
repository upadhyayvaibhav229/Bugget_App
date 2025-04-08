import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name')
  return (
    <div>
    <h1>Welcome back {name}</h1>
    </div>
  )
}

export default Home
