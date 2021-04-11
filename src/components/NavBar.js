import React from 'react'

const NavBar = ({ pageHandler, currentPage }) => {
  return (
    <nav className="absolute right-0 p-6 top-0">
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
