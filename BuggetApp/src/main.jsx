import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from  'react-router-dom'
// import Home from './Pages/HomeBugget.jsx'
import HomeBugget from './Pages/HomeBugget.jsx'
import Home from './Pages/Home.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >

      <Route path='' element= {<HomeBugget />} />
      <Route path='/index/:name' element= {<Home/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
