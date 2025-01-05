import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Layout from './components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'

export default function App() {
  let routers = createBrowserRouter([

    {
      path: "",
      element: <Layout/>,
      children: [
        { index: true, element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Portfolio", element: <Portfolio /> },
        { path: "Contact", element: <Contact/> },
        { path: "*", element: <NotFound/> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  )

}