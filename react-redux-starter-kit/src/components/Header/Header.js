import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
    {' · '}
    <Link to='/blog' activeClassName='route--active'>
      Blog
    </Link>
     {' · '}
    <Link to='/calendar' activeClassName='route--active'>
      Calendar
    </Link>
  </div>
)

export default Header
