import React from 'react'

const Input = ({type , style, value,id, placeholder , defaultValue , onChange}) => {

  return (
    
         <input
          type={`${type}`}
          className={`${style}`}
          id={`${id}`}
          placeholder={`${placeholder}`}
          defaultValue={value}
          onChange={onChange}
              />
  )
}

export default Input