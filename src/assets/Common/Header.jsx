import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='max-w-292 mx-auto py-10'>
      <h1 className='text-3xl text-center font-bold'>Header Section</h1>
      <nav className='py-5'>
        <ul className='flex justify-center gap-10'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About</Link></li>
          <li><Link to="/contact-us">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
    </div>
  )
}
export default Header