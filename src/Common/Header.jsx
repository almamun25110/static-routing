import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div>
        <h1>Header Part</h1>
        <nav>
            <ul>
                <li><Link to={'/'} className='link'>Home</Link></li>
                <li><Link to={'/about-us'} className='link'>About</Link></li>
                <li><Link to={'/contact-us'} className='link'>Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}
