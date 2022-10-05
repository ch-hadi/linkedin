import React from 'react'

const Input = ({type , style , id, placeholder}) => {
  return (
    
         <input
          type={`${type}`}
          className={`${style}`}
          id={`${id}`}
          placeholder={`${placeholder}`}
              />
  )
}

export default Input