import React from 'react'
import Header from '../Header/Header'
import "./Home.css"

const Home = () => {
  return <>
<Header/>
<div className="hom">
   <div class="row">
     <div class="column1">
       {/* <h1>Mercado Escolar</h1> */}
       <p>Welcome to Mercado Escolar</p>
       <button>Explore</button>
     </div>
     <div class="column2">
       <img src="https://www.hmablogs.com/wp-content/uploads/2022/06/banner-img.png" alt="banner" style={{width:"100%", height: "100vh"}}/>
     </div>
   </div>
   </div>
  </>
}

export default Home