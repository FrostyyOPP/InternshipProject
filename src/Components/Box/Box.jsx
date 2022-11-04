import React from 'react'
import './box.css'
export const Box = ({ boxBody, boxCount, plus }) => {
  return (
    <div className='box'>
        <h1 className='box-head'>{boxCount}<span className='span'>{plus}</span></h1>
        <p className='box-body'>{boxBody}</p>
    </div>
  )
}
