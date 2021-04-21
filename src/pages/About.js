import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { X } from 'react-feather'

import me from '../assets/images/me.png'

const About = ({ pageHandler, currentPage, modalHandler }) => {
  return (
    <AnimatePresence>
      {currentPage === 'about' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="page about">
          <X
            size="30"
            className="absolute left-0 top-0 mx-4 my-7 cursor-pointer close-icon"
            onClick={() => pageHandler('home')}
          />
          <div className="text-ctn py-3 px-10 ml-12">
            <div className="flex items-center">
              <h2 className="font-bold text-red-500 select-none">About me</h2>
            </div>
            <div className="select-none">
              <p className="my-6">
                I am a Software engineer located in Nigeria. I am so passionate about making interactive UI and also
                creating dynamic and intuitive user experiences.
              </p>
              <p className="my-6">
                A Well organized team player, highly focused and independent employee with great attention to detail.
                Fan of football, indoor activities, video games and sports generally.
              </p>
              <p className="my-6">Interested in working on ambitious projects with positive people</p>
              <span
                className="text-red-500 hover:opacity-50 transition-all ease-out cursor-pointer"
                onClick={modalHandler}>
                Let's connect
              </span>
            </div>
          </div>
          <div className="graphic-ctn py-3 px-5">
            <div className="overlay" />
            <img src={me} alt="moses" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default About
