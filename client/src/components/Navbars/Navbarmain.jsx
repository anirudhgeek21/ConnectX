import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import settings from './setting.svg';
import { useSelector } from "react-redux";

export default function Navbarmain({ userId }) {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = useSelector((state) => state.token);

  const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Failed to fetch user:', error);
    }
  };

  useEffect(() => {
    getUser();
  }, [userId, token]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const { firstName } = user;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="py-5 px-0 bg-white text-blue-600 w-full md:w-[90%] mx-auto">
      <div className="flex justify-between items-center">
        <Link to="/">
          <div className="font-extrabold text-5xl ml-[1.2rem] mb-3 text-left">
            ConnectX
          </div>
        </Link>
        <div className="flex items-center">
          <div className="md:flex justify-around items-end hidden md:block mt-2">
            <div className="px-3 text-lg font-light">
              <motion.div whileHover={{ scale: 1.1 }} className="text-blue-600 hover:font-normal duration-100"><Link to="/home">Home</Link></motion.div>
            </div>
            <div className="px-3 text-lg font-light">
              <motion.div whileHover={{ scale: 1.1 }} className="text-blue-600 hover:font-normal duration-100"><Link to="/discover">Discover</Link></motion.div>
            </div>
            <div className="px-2 pb-[0.1px] text-lg font-light">
              <motion.div whileHover={{ scale: 1.1 }} className="text-blue-600 hover:font-normal duration-100"><Link to="/event">Events</Link></motion.div>
            </div>
            <div className="px-3 text-lg font-light">
              <motion.div whileHover={{ scale: 1.1 }} className="text-blue-600 hover:font-normal duration-100"><Link to="/profile">Hi, {firstName}!</Link></motion.div>
            </div>
            <div className="px-2 text-lg font-light">
              <motion.div whileHover={{ scale: 1.1 }} className="text-blue-600 hover:font-normal duration-100">
                <Link to="/help">
                  <img src={settings} alt="Settings" className="mb-[0.32rem]" />
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="md:hidden ml-4">
            <motion.div whileHover={{ scale: 1.1 }} className="text-blue-600 hover:font-normal duration-100 mr-4 w-[20%] mb-3" onClick={toggleMenu}>
              ☰
            </motion.div>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 mt-2 ml-[-4%]">
          <div className="flex justify-between items-center px-4 py-3">
            <div className="font-extrabold text-5xl ml-[1.2rem] text-blue-600">
              ConnectX
            </div>
            <div className="text-lg font-light">
              <motion.div whileHover={{ scale: 1.1 }} className="text-blue-600 hover:font-normal duration-100" onClick={toggleMenu}>
                &#x2715;
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-8">
            <div className="px-3 text-lg font-light mb-4">
              <motion.div whileHover={{ scale: 1.1 }} className="text-blue-600 hover:font-normal duration-100" onClick={toggleMenu}><Link to="/home">Home</Link></motion.div>
            </div>
            <div className="px-3 text-lg font-light mb-4">
              <motion.div whileHover={{ scale: 1.1 }} className="text-blue-600 hover:font-normal duration-100" onClick={toggleMenu}><Link to="/discover">Discover</Link></motion.div>
            </div>
            <div className="px-3 text-lg font-light mb-4">
              <motion.div whileHover={{ scale: 1.1 }} className="text-blue-600 hover:font-normal duration-100" onClick={toggleMenu}><Link to="/event">Events</Link></motion.div>
            </div>
            <div className="px-3 text-lg font-light mb-4">
              <motion.div whileHover={{ scale: 1.1 }} className="text-blue-600 hover:font-normal duration-100" onClick={toggleMenu}><Link to="/profile">Hi, {firstName}!</Link></motion.div>
            </div>
            <div className="px-3 text-lg font-light mb-4">
              <motion.div whileHover={{ scale: 1.1 }} className="text-blue-600 hover:font-normal duration-100" onClick={toggleMenu}>
                <Link to="/help">
                  <img src={settings} alt="Settings" className="mb-[0.32rem]" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
