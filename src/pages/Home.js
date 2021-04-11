import React from 'react'

import { Hero, SideMenu } from '../components'

const Home = () => {
  return (
    <div>
      <div className="hero h-screen w-screen flex">
        <SideMenu />
        <Hero />
      </div>
    </div>
  )
}

export default Home
