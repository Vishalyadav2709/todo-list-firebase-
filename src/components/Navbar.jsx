import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-between bg-gray-200 w-full p-4'>
      <h1 className='text-center text-2xl font-bold'>
        Todo-List
      </h1>
      <p>{user?.displayName}</p>
      {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <div style={{padding:'10px'}}>
        <Link to='/' style={{padding:'10px'}}>Home</Link>
        <Link to='/signin' style={{padding:'10px'}}>Sign in</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
