import React from 'react'

import { Hero, SideMenu } from '../components'

const Home = ({ modalHandler }) => {
  return (
    <div>
      <div className="hero h-screen w-screen flex">
        <SideMenu />
        <Hero modalHandler={modalHandler} />
      </div>
    </div>
  )
}

export default Home
