import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './Login'
import Navbar from './Navbar'
import Feed from './Feed';
import Config from './Config';
import Perfil from './Perfil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/feed",
    element: <Feed></Feed>
  },
  {
    path: "/perfil",
    element: <Perfil></Perfil>
  },
  {
    path: "/config",
    element: <Config></Config>
  }
]
)

function App() {

  return (
  <>
    <RouterProvider router={router}/>
    
  </>
  )
}

export default App
