import React,{useState,useEffect} from 'react';

const Home=()=>{
const [data,setData]=useState([]);
const [searchData,setSearchData]=useState('');

useEffect(()=>{
fetch('https://serverfake.herokuapp.com/topRamen').then((r)=>r.json()).then((r)=>{
    setData(r);
    console.log(data)  
    console.log(r)
})
},[])

    return (
        <>
        <div className="container">
        <input className="" style={{margin:"10px"}} placeholder="Search"  value={searchData} onChange={(event)=>setSearchData(event.target.value)}/>
        <div className="row" style={{backgroundColor:"#E7E6DD",marginBottom:"10px",marginTop:"20px",padding:"5px"}}>
        <div className="col">Brand</div>
        <div className="col">Variety</div>
        <div className="col">Style</div>
        <div className="col">Country</div>
        <div className="col">Stars</div>
        </div>
        
            {data.filter((v)=>{
            if(searchData!==''){return v.Country.includes(searchData) || v.Brand.includes(searchData) || v.Variety.includes(searchData) || v.Style.includes(searchData)  }
            else{
                return v;
            }
            }
           ).map((value)=>{
                return(
                    <>
                    <div className="row m-40">
                    <div className="col">{value.Brand}</div>
                    <div className="col">{value.Variety}</div>
                    <div className="col">{value.Style}</div>
                    <div className="col">{value.Country}</div>
                    <div className="col">{value.Stars}</div>
                    </div>
                    </>
                )
            })}
          
        </div>
        </>
    )
}
export default Home;