import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = ({ user, handleLogout }) => {
  return (
    <div>
      <nav>
        <ul className='flex flex-wrap p-5 space-x-10 text-center justify-center m-10'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {user ? (
              <div className="flex items-center">
                <span className="mr-2">Welcome, {user.name}!</span>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cartlist">Cartlist</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
