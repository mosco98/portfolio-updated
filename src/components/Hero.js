import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { ArrowRight } from 'react-feather'

import nerdFace from '../assets/images/nerd_face (1).gif'

const Hero = ({ modalHandler }) => {
  return (
    <div className="main-content flex items-center px-7">
      <div className="container select-none">
        <AnimatePresence>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <h1 className="font-bold flex items-center mb-1">
              Hi{' '}
              <motion.img
                transition={{ duration: 0.7, delay: 0.2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={nerdFace}
                alt="nerd-face"
              />
            </h1>
            <motion.h1
              transition={{ duration: 0.7, delay: 1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-bold flex">
              I'm <h1 className="ml-4 font-extrabold text-red-500">M</h1>oses,
            </motion.h1>
            <motion.div transition={{ duration: 0.7, delay: 1.3 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1 className="font-extrabold">A Software Engineer</h1>
              <p className="mt-3 text-xl opacity-80">
                Team player, innovative, creative human seeking opportunities where I can make an impact with code.
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <motion.button
          transition={{ delay: 2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16 hover:bg-red-500 py-4 px-12 outline-none border border-red-500 transition-all ease-out focus:outline-none flex items-center content-around"
          onClick={modalHandler}>
          GET IN TOUCH <ArrowRight className="ml-1" />
        </motion.button>
      </div>
    </div>
  )
}

export default Hero
