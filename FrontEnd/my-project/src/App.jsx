import { useState } from 'react'
import{createBrowserRouter, RouterProvider } from "react-router-dom"
import ROUTES from './routes/router'
import "./app.css"

import './App.css'
const router = createBrowserRouter(ROUTES)
function App() {
  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
