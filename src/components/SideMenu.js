import { motion } from 'framer-motion'
import React from 'react'
import { GitHub, Linkedin, Mail, Twitter } from 'react-feather'

const SideMenu = () => {
  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -10 }
  }
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ delay: 2.5 }}
      className="side-menu px-4 flex items-center content-center">
      <div>
        <a href="https://github.com/mosco98" title="Github">
          <GitHub size="30" fill="#f4f4f4" className="cursor-pointer my-10 hover:opacity-50 transition-all ease-out" />
        </a>
        <a href="https://www.linkedin.com/in/moses-enyinnaya-142282197/" title="LinkedIn">
          <Linkedin
            size="30"
            fill="#0a66c2"
            stroke="#0a66c2"
            className="cursor-pointer my-10 hover:opacity-50 transition-all ease-out"
          />
        </a>
        <a href="https://twitter/_moscode" title="Twitter">
          <Twitter
            size="30"
            fill="#1da1f2"
            stroke="#1da1f2"
            className="cursor-pointer my-10 hover:opacity-50 transition-all ease-out"
          />
        </a>
        <a href="mailto:enyinnayamoses60@gmail.com">
          <Mail size="30" className="cursor-pointer my-10 hover:opacity-50 transition-all ease-out" />
        </a>
      </div>
    </motion.div>
  )
}

export default SideMenu
