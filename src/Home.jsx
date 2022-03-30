import React from 'react'
import homepic from './Images/food.jpeg'
import {Link} from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <div className='home' style={{backgroundImage:`url(${homepic})`}}>
    <div className='headerContainer'>
    <h1>Food Corner</h1>
    <p>INDIAN FOOD AT A CLICK</p>
    <Link to='/menu'>
    <button>Order Now</button> 
    </Link>
    

    </div>
      
    </div>
  )
}

export default Home
