import React from 'react'
import { Menu } from 'react-feather'

const NavBar = ({ pageHandler, currentPage, sideDrawerHandler }) => {
  return (
    <nav className="absolute right-0 p-6 top-0">
      <Menu
        size="35"
        fill="white"
        className="menu-btn cursor-pointer hover:opacity-90 transition-all ease-out"
        onClick={sideDrawerHandler}
      />

      <ul>
        <li className="mx-5 hover:text-red-500 transition-all ease-out cursor-pointer">Résumé</li>
        <li
          className={
            currentPage === 'projects'
              ? 'mx-5 hover:text-red-500 transition-all ease-out cursor-pointer text-red-500'
              : 'mx-5 hover:text-red-500 transition-all ease-out cursor-pointer'
          }
          onClick={() => pageHandler('projects')}>
          Projects
        </li>
        <li
          className={
            currentPage === 'about'
              ? 'mx-5 hover:text-red-500 transition-all ease-out cursor-pointer text-red-500'
              : 'mx-5 hover:text-red-500 transition-all ease-out cursor-pointer'
          }
          onClick={() => pageHandler('about')}>
          About
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
