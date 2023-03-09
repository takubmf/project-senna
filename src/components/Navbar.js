import React from 'react';
import { Link } from 'react-router-dom'

const styles ={
  nav:{
   backgroundColor: 'green',
   textDecorationColor: 'none',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   gap : '2rem',
   padding: '0 1rem',
  }
}
    

function Navbar() {
  return (
    <>
      <nav style={styles.nav}>
      <Link to ='/'>Home</Link>
        <ul>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Me</Link>
          </li>
          <li>
            <Link to='/resume'>Resume</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar