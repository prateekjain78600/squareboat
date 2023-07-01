import React ,{useEffect,useState}from 'react'
import axios from 'axios';

function Search() {
    const[data,setdata]=useState([]);
    const[filterdata,setfilterdata]=useState([]);
    useEffect(()=>{
        fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=dfb59392ba794f9c862ff76028dccf32")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            // setdata(data);
            setfilterdata(...data);
            console.log(filterdata);
        })
        .catch(err=>console.log(err))
    },[])
    const handlefilter=(value)=>{
        const res=filterdata.filter(f=>f.title
            .toLowerCase().includes(value));
        setdata(res);
    }
  return (
    <div className='container'>
        <div className="search">
            <input type="text" placeholder='search here' onChange={e=>handlefilter(e.target.value)} />
        </div>
        <div className='search-result'>
            {
                filterdata.map((d,i)=>{
                    <div key={i}>
                        {d.title}
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Search
