import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Howdy!</h4>
    <img
      alt='Look at Punkin '
      className='duck'
      src={DuckImage} />
  </div>
)

export default HomeView
