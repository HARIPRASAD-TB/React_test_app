import React from 'react';
import Style from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={Style.mainHeader}>
        <h1 className={Style.headding}>This sight is only for test purpose</h1>
        <div className={Style.homeLink}>
          <Link to='/'>Home</Link>
        </div>
    </div>
  );
}

export default Header;