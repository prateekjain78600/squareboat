import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
// import navbar from './components/navbar'

function App() {

  return (
    <>
      <div className='container my-5'>
        <div className='row text-center'>
                <div className='col my-3'>
                  <div className="card" style={{width: "18rem"}}>
                      <img src="https://cdn.pixabay.com/photo/2016/11/29/03/53/athletes-1867185_640.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Sports News</h5>
                          <p className="card-text">Sports journalism is a form of writing that reports on matters pertaining to sporting topics and competitions.</p>
                          <button className="btn btn-success text-white"><Link className='text-white style-none' to="/sport" >More Details</Link></button>
                        </div>
                      </div>
                </div>
                <div className='col my-3'>
                  <div className="card" style={{width: "18rem"}}>
                      <img src="https://cdn.pixabay.com/photo/2023/06/06/16/08/ai-generated-8045019_1280.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Technology News</h5>
                          <p className="card-text">TOP TECHNOLOGY TRENDS</p>
                          <button className="btn btn-success text-white"><Link className='text-white style-none' to="technology" >More Details</Link></button>
                        </div>
                      </div>
                </div>
                <div className='col my-3'>
                  <div className="card" style={{width: "18rem"}}>
                      <img src="https://cdn.pixabay.com/photo/2015/09/16/17/09/newspaper-943004_1280.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Top News</h5>
                          <p className="card-text">Stock market update: Stocks that hit 52-week lows on NSE in today's trade</p>
                          <button className="btn btn-success text-white"><Link className='text-white style-none' to="/topnews" >More Details</Link></button>
                        </div>
                      </div>
                </div>
              
            
          
        </div>
      </div>
    </>
  )
}

export default App
