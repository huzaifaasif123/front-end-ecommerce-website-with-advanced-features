import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from './Applayout'
import Home from './Home'
import About from './About'
import Contact from './Contact'



const App = () => {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<Applayout/>,
      children:[
        {
        path:"",
        element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        }
        ,
        {
          path:"/contact",
          element:<Contact/>
        }

    ]
    }       
  ])
  return (
    <div>
    <RouterProvider router={route}/>
      
    </div>
  )
}

export default App
