import { AnimatePresence, motion } from 'framer-motion'
import React, { useRef, useState } from 'react'

const Modal = ({ modalHandler }) => {
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [submitSuccess, updateSubmitSuccess] = useState(false)
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const formSubmitHandler = (e) => {
    e.preventDefault()
    setError(false)
    setErrorMsg('')
    updateSubmitSuccess(false)
    const name = nameRef.current.value
    const email = emailRef.current.value
    const message = messageRef.current.value
    if (name === '' || email === '' || message === '') {
      setError(true)
      setErrorMsg('Fields are required')
    } else {
      // Do stuff here
      console.log(name)
      console.log(email)
      console.log(message)
      updateSubmitSuccess(true)
    }
  }
  return (
    <AnimatePresence>
      <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
        <div className="back-drop cursor-pointer" onClick={modalHandler} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="form-ctn p-5 shadow-lg relative">
          {submitSuccess ? (
            <div className="text-center py-5">
              <h3 className="font-extrabold text-3xl">Thank you for Reaching out</h3>
              <span className="my-4">I'd get back to you ASAP</span>
            </div>
          ) : (
            <>
              <h3 className="text-3xl font-extrabold text-red-500 text-center">CONTACT ME</h3>
              <form onSubmit={formSubmitHandler} className="px-4">
                <div className="mt-2">{error && <span className="text-red-800 opacity-90">*{errorMsg}</span>}</div>
                <div className="my-2">
                  <label className="my-3">Name*</label>
                  <input className="p-2 focus:outline-none" autoFocus={true} type="text" ref={nameRef} />
                </div>
                <div className="my-2">
                  <label className="my-3">Email*</label>
                  <input className="p-2 focus:outline-none" type="email" ref={emailRef} />
                </div>
                <div className="my-2">
                  <label className="my-3">Message*</label>
                  <textarea className="p-2 focus:outline-none" ref={messageRef}></textarea>
                </div>
                <button className="bg-red-500 px-5 py-2 float-right focus:outline-none">SEND</button>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Modal
