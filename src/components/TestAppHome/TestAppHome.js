import React from 'react'
import {Link} from 'react-router-dom';
import Style from './TestAppHome.module.scss';

function TestAppHome() {
  return (
    <nav className={Style.navigatingLinks}>
        <div className={Style.path}>
            <Link to='/palindrome'>Palindrome</Link>
        </div>
        <div className={Style.path}>
            <Link to='/removeDuplicates'>Remove duplicates</Link>
        </div>
    </nav>
  )
}

export default TestAppHome