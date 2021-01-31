import React from 'react'
import loadingAnimation from '../assets/loadingAnimation.svg'
import './Loading.css'

const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingAnimation} alt="loading" />
    </div>
  )
}

export default Loading
