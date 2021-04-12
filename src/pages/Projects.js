import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { X } from 'react-feather'

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
          <X size="30" className="absolute left-0 top-0 m-7 cursor-pointer z-10" onClick={() => pageHandler('home')} />

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 gap-4 w-3/5 mx-auto mt-20 relative">
            <h4
              className="font-bold absolute top-0 text-white select-none text-7xl -mt-10 -ml-6 z-0"
              style={{ opacity: '0.135' }}>
              Projects
            </h4>
            <motion.div variants={item} className="bg-red-100 h-40 cursor-pointer hover:opacity-80">
              1
            </motion.div>
            <motion.div variants={item} className="bg-red-100 h-40 cursor-pointer hover:opacity-80">
              2
            </motion.div>
            <motion.div variants={item} className="bg-red-100 h-40 cursor-pointer hover:opacity-80">
              3
            </motion.div>
            <motion.div variants={item} className="bg-red-100 h-40 cursor-pointer hover:opacity-80">
              4
            </motion.div>
            <motion.div variants={item} className="bg-red-100 h-40 cursor-pointer hover:opacity-80">
              5
            </motion.div>
            <motion.div variants={item} className="bg-red-100 h-40 cursor-pointer hover:opacity-80">
              6
            </motion.div>
            <motion.div variants={item} className="bg-red-100 h-40 cursor-pointer hover:opacity-80">
              7
            </motion.div>
            <motion.div variants={item} className="bg-red-100 h-40 cursor-pointer hover:opacity-80">
              8
            </motion.div>
            <motion.div variants={item} className="bg-red-100 h-40 cursor-pointer hover:opacity-80">
              9
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Projects
