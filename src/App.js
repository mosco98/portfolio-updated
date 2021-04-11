import React, { Component } from 'react'

import { NavBar } from './components'
import { About, Home, Projects } from './pages'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 'home'
    }
  }

  pageHandler = (page) => {
    this.setState({ currentPage: page })
  }

  render() {
    const { currentPage } = this.state
    return (
      <div>
        <NavBar pageHandler={this.pageHandler} currentPage={currentPage} />
        {currentPage === 'home' && <Home pageHandler={this.pageHandler} />}
        {currentPage === 'about' && <About currentPage={currentPage} pageHandler={this.pageHandler} />}
        {currentPage === 'projects' && <Projects currentPage={currentPage} pageHandler={this.pageHandler} />}
      </div>
    )
  }
}
