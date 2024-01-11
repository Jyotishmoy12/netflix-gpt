import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import {RouterProvider} from 'react-router-dom'


const Body = () => {
    const AppRouter=createBrowserRouter([
        {
          path: '/',
          element:<Login/>  
        },
        {
            path: '/browse',
            element:<Browse/>  
          }
    ])
// I have to do this for once 
return (
    <div>
    <RouterProvider router={AppRouter}/>
    </div>
  )
}

export default Body