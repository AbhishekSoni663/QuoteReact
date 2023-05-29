import React from 'react'
import QrGen from './Components/QrGen'
import Card from './Components/Card'

const Home = () => {
  return (
    <div className='home-section'> 
    <div className='home2'><QrGen/></div>
      <div className='home3'><Card/></div>
    </div>
  )
}

export default Home
