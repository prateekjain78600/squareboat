import React,{useEffect,useState} from 'react'
import Home from './pages/Home'
import Navbar1 from './components/Navbar1'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Sport from './components/Sport'
import TopNews from './components/TopNews'
import Technology from './components/Technology'
import Search from './components/Search'
import Home1 from './pages/Home1'

function App() {
  return (
    <>
        <BrowserRouter>
        <Navbar1/>
        {/* <Search/> */}
          <Routes>
            <Route path='/' index element={<Home1/>}/>
            <Route path='sport' element={<Sport/>}/>
            <Route path='topnews' element={<TopNews/>}/>
            <Route path='technology' element={<Technology/>}/>
            
            </Routes>      
        </BrowserRouter>   
    </>
        
  )
}

export default App
