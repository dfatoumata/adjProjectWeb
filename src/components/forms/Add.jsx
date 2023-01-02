import React from 'react'
import Headers from '../partials/Headers/Headers'
import Homeforms from './Homeforms'
import './Homeforms.scss'

function Add() {
  return (
    
  <div>
    <div>
        <Headers/>
    </div>
    <div className='selecforms'>
        <Homeforms />
    </div>
  </div>
  )
}

export default Add