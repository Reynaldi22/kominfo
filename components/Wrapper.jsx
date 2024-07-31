import React from 'react'

const Wrapper = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1280px] relative z-30 overflow-visible ${
        className || ""}`}
        > {children} </div>
  )
}

export default Wrapper