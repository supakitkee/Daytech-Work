import NavLink from '../NavBar/NavLink';
import React from 'react';

const Nav = () => {
  return (
    <div className='w-100 max-w-4xl mx-auto'>
      <h1 className='text-4xl font-bold'>Daytech Dashboard</h1>
      <div className='my-5'>
        <NavLink href='/'>Widgets</NavLink>
        <NavLink href='/about'>About</NavLink>
      </div>
    </div>
  );
};

export default Nav;
