import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { X } from 'react-feather'

import trendingGif from '../assets/images/Trending-landing-page-showcase.gif'

const Projects = ({ pageHandler, currentPage }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  return (
    <AnimatePresence>
      {currentPage === 'projects' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="page projects">
          <X
            size="30"
            className="absolute left-0 top-0 mx-4 my-7 z-10 cursor-pointer close-icon"
            onClick={() => pageHandler('home')}
          />
          <h4
            className="font-bold absolute top-0 text-white select-none text-7xl mt-10 ml-6 z-0"
            style={{ opacity: '0.135' }}>
            Projects
          </h4>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-3/5 mx-auto mt-20 relative h-auto overflow-y-scroll"
            style={{ height: '80%' }}>
            <motion.div variants={item} className="bg-gray-50 h-44 cursor-pointer hover:opacity-80 relative shadow-sm">
              <div className="bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in-out w-full h-full absolute top-0 flex flex-col items-center justify-center space-y-2">
                <h4 className="text-white text-1xl text-center font-semibold" style={{ lineHeight: '1.5rem' }}>
                  Trending chrome extension
                </h4>
                <button className="px-2 py-1 text-xs bg-red-500 text-white hover:opacity-70 transition-all">
                  <a href="https://trending-ext.netlify.app">View</a>
                </button>
              </div>
              <img className="object-contain h-full" src={trendingGif} alt="trending-gif" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Projects
