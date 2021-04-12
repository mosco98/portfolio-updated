import React, { Component } from 'react'

import { Modal, NavBar } from './components'
import { About, Home, Projects } from './pages'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 'home',
      showModal: false
    }
  }

  pageHandler = (page) => {
    this.setState({ currentPage: page })
  }

  modalHandler = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    const { currentPage, showModal } = this.state
    return (
      <div>
        {showModal && <Modal modalHandler={this.modalHandler} />}
        <NavBar pageHandler={this.pageHandler} currentPage={currentPage} />
        {currentPage === 'home' && <Home pageHandler={this.pageHandler} modalHandler={this.modalHandler} />}
        {currentPage === 'about' && (
          <About currentPage={currentPage} pageHandler={this.pageHandler} modalHandler={this.modalHandler} />
        )}
        {currentPage === 'projects' && <Projects currentPage={currentPage} pageHandler={this.pageHandler} />}
      </div>
    )
  }
}
