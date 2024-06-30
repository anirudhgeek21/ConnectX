import React, { Fragment } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import image6 from './image9.svg';
import { Link } from "react-router-dom";
import Communitycard from "../Discover/Communitycard";
import ConnectCard from '../Connect/ConnectCards';
import TrendingPosts from './TrendingPosts';

const Event = () => {
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
    <Fragment>
      <motion.div
        className="w-full h-[35vh] md:h-[47vh] flex flex-col md:flex-row justify-around items-center relative md:px-16"
        style={{
          background,
          color
        }}
        whileHover={{ scale: 1.01 }}
      >
        <div className="w-full md:w-3/4 px-8 md:px-20 my-auto text-white text-center md:text-left md:mt-20">
          <div className="font-extrabold text-3xl md:text-5xl md:pt-0 pb-2">
            Live and Upcoming ConnectX events
          </div>
          <div className="font-thin text-sm md:text-xl">
            Exclusive events for you by ConnectX to energise and make your college life a blast
          </div>
          <Link to="/discover">
            <motion.div
              className="text-[#0000ff] text-sm font-normal bg-white text-center md:text-left py-1 rounded-md px-5 mt-7 inline-block"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
            >
              <Link to="/event">View all Events</Link>
            </motion.div>
          </Link>
        </div>

        <div className="w-full md:w-[30%] justify-center mt-8 md:mt-0 hidden md:block">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x }}
            className="relative"
          >
            <img src={image6} alt="" className="w-full md:max-w-md" />
            
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="mt-8 text-3xl font-thin text-center">
        Trending around you
      </motion.div>
      <motion.div className="flex justify-around w-full mx-auto">
        <TrendingPosts />
      </motion.div>

      <motion.div className="mt-8 text-3xl font-thin text-center">
        Posts From Your Friends
      </motion.div>
      <motion.div className="flex justify-around w-full mx-auto">
        <TrendingPosts />
      </motion.div>

      <motion.div className="mt-10 text-3xl font-thin text-center mb-5">
        Discover new groups
      </motion.div>
      <motion.div className="grid grid-cols-2 md:grid-cols-5 gap-0 px-6">
        <Communitycard />
        <Communitycard />
        <Communitycard />
        <Communitycard />
        <Communitycard />
      </motion.div>

      <motion.div className="mt-20 text-3xl font-thin text-center">
        Discover New People
      </motion.div>
      <motion.div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-6">
        <ConnectCard text="🟢 online" />
        <ConnectCard text="🟢 online" />
        <ConnectCard text="🟢 online" />
        <ConnectCard text="🟢 online" />
        <ConnectCard text="🟢 online" />
        <ConnectCard text="🟢 online" />
        <ConnectCard text="🟢 online" />
        <ConnectCard text="🟢 online" />
        <ConnectCard text="🟢 online" />
      </motion.div>
    </Fragment>
  );
};

export default Event;
