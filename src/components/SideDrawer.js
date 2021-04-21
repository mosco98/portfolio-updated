import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { GitHub, Linkedin, Mail, Twitter, X } from 'react-feather'

const SideDrawer = ({ sideDrawerHandler, pageHandler, currentPage }) => {
  function clickHandler(page) {
    pageHandler(page)
    sideDrawerHandler()
  }
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="side-drawer">
        <X
          size="35"
          className="absolute top-0 right-0 my-6 mx-6 cursor-pointer hover:opacity-90 transition-all ease-out"
          onClick={sideDrawerHandler}
        />
        <ul className="text-center">
          <li className="my-5 cursor-pointer hover:text-red-500 transition-all ease-out">
            <a href="https://docs.google.com/document/d/1hYbdfFH7KJWDOZ5vgYn_l_WXEOc_d5HP1yXfdjCO5fQ/edit?usp=sharing">
              Résumé
            </a>
          </li>
          <li
            className={
              currentPage === 'projects'
                ? 'my-5 hover:text-red-500 transition-all ease-out cursor-pointer text-red-500'
                : 'my-5 hover:text-red-500 transition-all ease-out cursor-pointer'
            }
            onClick={() => clickHandler('projects')}>
            Projects
          </li>
          <li
            className={
              currentPage === 'about'
                ? 'my-5 hover:text-red-500 transition-all ease-out cursor-pointer text-red-500'
                : 'my-5 hover:text-red-500 transition-all ease-out cursor-pointer'
            }
            onClick={() => clickHandler('about')}>
            About
          </li>
          <li
            className={
              currentPage === 'skills'
                ? 'my-5 hover:text-red-500 transition-all ease-out cursor-pointer text-red-500'
                : 'my-5 hover:text-red-500 transition-all ease-out cursor-pointer'
            }
            onClick={() => clickHandler('skills')}>
            My skills
          </li>
        </ul>

        <div className="absolute bottom-0 my-20 flex items-center">
          <a href="https://github.com/mosco98" className="mx-2" title="Github">
            <GitHub fill="#f4f4f4" className="cursor-pointer hover:opacity-50 transition-all ease-out" />
          </a>
          <a href="https://www.linkedin.com/in/moses-enyinnaya-142282197/" className="mx-2" title="LinkedIn">
            <Linkedin
              fill="#0a66c2"
              stroke="#0a66c2"
              className="cursor-pointer hover:opacity-50 transition-all ease-out"
            />
          </a>
          <a href="https://twitter/_moscode" className="mx-2" title="Twitter">
            <Twitter
              fill="#1da1f2"
              stroke="#1da1f2"
              className="cursor-pointer hover:opacity-50 transition-all ease-out"
            />
          </a>
          <a href="mailto:enyinnayamoses60@gmail.com">
            <Mail className="cursor-pointer mx-2 hover:opacity-50 transition-all ease-out" />
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default SideDrawer
