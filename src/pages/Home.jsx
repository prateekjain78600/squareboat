import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import navbar from './components/navbar'

function App() {

  const [news, setnews] = useState([]);
  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=dfb59392ba794f9c862ff76028dccf32")
      .then((res) => {
        console.log(res.data.articles);
        setnews(res.data.articles);
      })
  }, [])
  return (
    <>
      <div className='container my-5'>
        <div className='row text-center'>
          {
            news.map((val) => {
              return (
                <div className='col my-3'>
                  <div className="card" style={{width: "18rem"}}>
                      <img src={val.urlToImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{val.title}</h5>
                          <p className="card-text">{val.description}</p>
                          <button className="btn btn-success text-white"><a className='text-white style-none' href={val.url} >More Details</a></button>
                        </div>
                      </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
