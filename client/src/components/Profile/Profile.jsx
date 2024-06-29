import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const ProfilePage = ({ userId, picturePath }) => {
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

  const {
    firstName,
    lastName,
    college,
    pseudoName,
    communities = [],
    events = [],
    friends = [],
  } = user;

  return (
    <div className="flex flex-col items-center justify-center bg-white p-4">
      <motion.div
        className="bg-white rounded-lg mt-3 p-6 w-[80%]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-row items-center justify-between">
          <motion.img
            className="rounded-full w-32 h-32 mb-4"
            src={picturePath}
            alt="Profile"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div className="flex flex-col text-right justify-between ">
            <motion.div
              className="text-3xl font-bold mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {firstName} {lastName}
            </motion.div>
            <motion.div
              className="text-gray-600 font-thin mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              " {pseudoName} "
            </motion.div>
            <motion.div
              className="text-gray-600 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {college}
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-700 text-center font-extralight mt-5">
            " Passionate developer with a love for creating beautiful and functional user interfaces. "
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-white rounded-lg mt-4 p-6 w-[80%]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-2">Communities</h3>
        <motion.div
          className="flex flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {communities.length === 0 ? (
            <p>No communities found</p>
          ) : (
            communities.map((community, index) => (
              <motion.img
                key={index}
                src={community.image}
                alt={`Community ${index}`}
                className="w-16 h-16 rounded-full m-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            ))
          )}
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-white rounded-lg mt-4 p-6 w-[80%]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-2">Events</h3>
        <motion.div
          className="flex flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {events.length === 0 ? (
            <p>No events found</p>
          ) : (
            events.map((event, index) => (
              <motion.img
                key={index}
                src={event.image}
                alt={`Event ${index}`}
                className="w-16 h-16 rounded-full m-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            ))
          )}
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-white rounded-lg mt-4 p-6 w-[80%]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-2">Friends</h3>
        <motion.div
          className="flex flex-wrap justify-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {friends.length === 0 ? (
            <p>No friends found</p>
          ) : (
            friends.map((friend, index) => (
              <motion.img
                key={index}
                src={friend.picturePath}
                alt={`Friend ${index}`}
                className="w-16 h-16 rounded-full m-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            ))
          )}
        </motion.div>


        <h3 className="text-xl font-bold mb-2">Your Posts</h3>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
