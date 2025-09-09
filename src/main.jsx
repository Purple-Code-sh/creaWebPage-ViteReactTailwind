import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import Header from './components/Header'
// pages
import Home from './pages/Home/Home'
import Xmas from './pages/Xmas/Xmas'
import Register from './pages/Register/Register'
import About from './pages/About/About'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <section className=' bg-gradient-to-b from-black to-transparent  backdrop-blur-xl    text-txt_white h-16 2xl:h-24   pt-1 lg:pt-2 px-2 sticky top-0 z-20'>
      <Header />
    </section>
    <Routes>
      <Route
        path='/creaWebPage-ViteReactTailwind/'
        element={
          <Home />
          }
      />
      <Route
        path='/creaWebPage-ViteReactTailwind/about'
        element={
          <div className='w-full overflow-hidden font-sans font-light '>
            <About />
          </div>
          }
      />
      <Route
        path='/creaWebPage-ViteReactTailwind/xmas'
        element={
          <div className='w-full font-sans font-light overflow-hidden '>
            <Xmas />
          </div>
          }
      />
      <Route
        path='/creaWebPage-ViteReactTailwind/register'
        element={
          <div className='w-full  overflow-hidden font-sans font-light '>
            <Register />
          </div>
          }
      />
    </Routes>
    <section>
      <div className='bg-black w-screen h-auto'>
        <Footer />
      </div>
    </section>
  </BrowserRouter>
)
