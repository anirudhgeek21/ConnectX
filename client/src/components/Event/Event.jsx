import React from 'react';
import { motion, useMotionValue, useTransform  } from 'framer-motion';
import { Link } from 'react-router-dom';
import image6 from './image8.svg';

const events = [
  {
    title: 'Event 1',
    date: '2024-06-20',
    location: 'Location 1',
    description: 'Description for event 1.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Event 2',
    date: '2024-06-21',
    location: 'Location 2',
    description: 'Description for event 2.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Event 3',
    date: '2024-06-22',
    location: 'Location 3',
    description: 'Description for event 3.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Event 4',
    date: '2024-06-23',
    location: 'Location 4',
    description: 'Description for event 4.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Event 5',
    date: '2024-06-24',
    location: 'Location 5',
    description: 'Description for event 5.',
    image: 'https://via.placeholder.com/150',
  },
];

const EventPage = () => {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, #0000ff 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 155) 100%)"
  ]);
  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "rgb(255, 255, 255)",
    "rgb(3, 209, 0)"
  ]);

  return (
    <>
      <motion.div
        style={{
          background,
          color
        }}
        whileHover={{ scale: 1.01 }}
        className="w-full md:h-[40vh] flex flex-col md:flex-row justify-around items-center"
      >
        <div className="w-full md:w-1/2 px-8 md:px-20 my-auto text-white md:mt-14">
          <div className="font-extrabold text-3xl md:text-5xl pt-10 md:pt-0 pb-2">
            Join Communities to go along with in our Events
          </div>
          <div className="md:text-xl text-sm font-thin">
            Join like minded fun people and enjoy with them 
          </div>
          <Link to="/discover">
            <motion.div
              className="text-[#0000ff] text-sm font-normal bg-white text-center w-[50%] md:w-[40%] py-1 rounded-md px-5 mx-auto mt-7"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
            >
              <Link to="/discover">View Groups</Link>
            </motion.div>
          </Link>
        </div>

        <div className="w-full md:w-[30%] flex justify-center mt-8 md:mt-0">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x }}
          >
            <img src={image6} alt="" className="w-full md:max-w-md" />
          </motion.div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center bg-white p-4 w-[90%] mx-auto mt-3">
        {events.map((event, index) => (
          <motion.div 
            key={index} 
            className="bg-white rounded-lg p-6 mb-6 w-[90%] mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 , delay: index * 0.2}}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.img 
                className="rounded-lg w-32 h-32 mb-4 md:mb-0 md:mr-6"
                src={event.image} 
                alt={event.title}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="flex flex-col justify-between">
                <motion.h2 
                  className="text-2xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {event.title}
                </motion.h2>
                <motion.p 
                  className="text-gray-700 mb-2 font-light text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  {event.date}
                </motion.p>
                <motion.p 
                  className="text-gray-600 mb-2 font-thin"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  {event.location}
                </motion.p>
                <motion.p 
                  className="text-gray-500 font-thin mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  {event.description}
                </motion.p>
                <motion.button 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Attend
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default EventPage;
