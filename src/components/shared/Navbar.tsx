'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import MaximumWidthWrapper from './MaximumWidthWrapper';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { logout, selectUser } from '../../redux/features/auth/authSlice';
import { useAppSelector } from '../../redux/hooks';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const user = useAppSelector(selectUser);

  const onToggle = () => {
    setOpen(prev => !prev);
  };

  const handleLogout = () => {
    // console.log('clicked');
    dispatch(logout());
  };

  return (
    <header className="bg-gray-800 text-white relative">
      <nav className="h-[80px] md:h-[60px] px-4 flex items-center p-2 md:p-4 xl:p-8">
        <MaximumWidthWrapper>
          <div className="w-full flex items-center justify-between relative">
            <h1 className="cursor-pointer text-2xl font-[700]">
              <Link to="/">SHINY Car Wash</Link>
            </h1>
            <div>
              <ul className="hidden md:flex items-center gap-5 font-semibold">
                <li className="text-gray-200 hover:text-white">
                  <Link to="/services">Services</Link>
                </li>
                {user && (
                  <li className="text-gray-200 hover:text-white">
                    <Link to="/reviews">Reviews</Link>
                  </li>
                )}
                {user?.role ? (
                  <>
                    <li className="text-gray-200 hover:text-white">
                      <Link to={`/${user?.role}/dashboard`}>Dashboard</Link>
                    </li>
                    <li>
                      <Button asChild onClick={handleLogout}>
                        <Link to="/">Logout</Link>
                      </Button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Button asChild>
                      <Link to="/login">Login</Link>
                    </Button>
                  </li>
                )}
              </ul>
            </div>

            <div className="md:hidden">
              <button
                id="menu-btn"
                className="text-gray-200 hover:text-white focus:outline-none"
                onClick={onToggle}
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>

            {open && (
              <div className="md:hidden absolute -right-4 top-14 z-30 p-20 bg-gray-800">
                <ul className="flex flex-col items-center gap-10 text-lg">
                  <li
                    className="text-gray-200 hover:text-white"
                    onClick={onToggle}
                  >
                    <Link to="/services">Services</Link>
                  </li>
                  <li
                    className="text-gray-200 hover:text-white"
                    onClick={onToggle}
                  >
                    <Link to="/bookings">Booking</Link>
                  </li>
                  {user ? (
                    <>
                      <li
                        className="text-gray-200 hover:text-white"
                        onClick={onToggle}
                      >
                        <Link to={`/${user.role}/dashboard`}>Dashboard</Link>
                      </li>
                      <li>
                        <Button asChild onClick={handleLogout}>
                          <Link to="/">Logout</Link>
                        </Button>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Button asChild>
                        <Link to="/login">Login</Link>
                      </Button>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </MaximumWidthWrapper>
      </nav>
    </header>
  );
};

export default Navbar;
