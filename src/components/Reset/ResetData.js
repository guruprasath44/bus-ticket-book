import React from 'react'
import * as Reset from './ResetFunctions.js'
import './Reset.css'

export default function ResetData () {
  Reset.resetdata()
    .then((response) => {
      alert('Reset Successfull')
      window.location.href = '/Admin/home'
    })

  return (
       <div>

       </div>
  )
}
