//component specific styling
import styles from '../styles/componentStyling/Nav.module.scss';
import React from 'react';
import Link from 'next/link';

function Nav() {
  return (
    <div className={styles.navouter}>
    <nav className={styles.nav}>
    <h2>conduit</h2>
    <ul>
      <li><Link href='/'><a className='link'>Home</a></Link></li>
      <li><Link href='/signin'><a className='link'>Sign in</a></Link></li>
      <li><Link href='/signup'><a className='link'>Sign up</a></Link></li>
    </ul>
    </nav>
    </div>
  )
}

export default Nav