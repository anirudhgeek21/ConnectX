import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import settings from './setting.svg';
import { useSelector } from "react-redux";

export default function Navbarmain({ userId }) {
  const [user, setUser] = useState(null);
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
  const text = "ConnectX".split(' ');

  return (
    <div className="py-5 px-0 bg-white text-blue-600 w-[100vw] cursor-default">
      <div className="md:flex justify-between md:w-[90%] w-[100%] mx-auto">
        <Link to="/">
          <motion.div className="font-extrabold text-5xl md:ml-0 ml-[1.2rem] md:mb-0 mb-3 text-left"
            whileHover={{ scale: 1.1 }}>
            {text.map((el, i) => (
              <motion.span
                className="text-blue-600 px-2 pb-1 rounded-sm mr-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </motion.div>
        </Link>
        <div className="flex justify-around items-end md:mt-0 mt-[1.35rem]">
          <div className="px-3 text-lg font-light">
            <motion.div whileHover={{ scale: 1.1 }} className="text-blue-600 hover:font-normal duration-100"><Link to="/home">Home</Link></motion.div>
          </div>
          <div className="px-3 text-lg font-light">
            <motion.div whileHover={{ scale: 1.1 }} className="text-blue-600 hover:font-normal duration-100"><Link to="/discover">Discover</Link></motion.div>
          </div>
          <div className="px-2 pb-[0.1px] text-lg font-light">
            <motion.div whileHover={{ scale: 1.1 }} className="text-blue-600 hover:font-normal duration-100"><Link to="/event">Events</Link></motion.div>
          </div>
          {/* <div className="px-3 text-lg font-light">
            <motion.div whileHover={{ scale: 1.1 }} className="text-blue-600 hover:font-normal duration-100"><Link to="/connect">Chat</Link></motion.div>
          </div> */}
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
      </div>
    </div>
  );
}
