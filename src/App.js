import React, { Component } from 'react'

import { Modal, NavBar, SideDrawer } from './components'
import { About, Home, Projects } from './pages'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 'home',
      showModal: false,
      showSideDrawer: false
    }
  }

  pageHandler = (page) => {
    this.setState({ currentPage: page })
  }

  modalHandler = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  sideDrawerHandler = () => {
    this.setState({ showSideDrawer: !this.state.showSideDrawer })
  }

  render() {
    const { currentPage, showModal, showSideDrawer } = this.state
    return (
      <div>
        {showSideDrawer && (
          <SideDrawer
            sideDrawerHandler={this.sideDrawerHandler}
            currentPage={currentPage}
            pageHandler={this.pageHandler}
          />
        )}
        {showModal && <Modal modalHandler={this.modalHandler} />}
        <NavBar pageHandler={this.pageHandler} currentPage={currentPage} sideDrawerHandler={this.sideDrawerHandler} />
        {currentPage === 'home' && <Home pageHandler={this.pageHandler} modalHandler={this.modalHandler} />}
        {currentPage === 'about' && (
          <About currentPage={currentPage} pageHandler={this.pageHandler} modalHandler={this.modalHandler} />
        )}
        {currentPage === 'projects' && <Projects currentPage={currentPage} pageHandler={this.pageHandler} />}
      </div>
    )
  }
}
