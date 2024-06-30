import React, { Fragment, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';
import image6 from './image6.svg';
import Communitybody from "./Communitybody";
import Communitypost from './Communitypost';

export default function Landing() {
  const [showCommunityBody, setShowCommunityBody] = useState(true);
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, #0000ff 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 155) 100%)"
  ]);

  const toggleCommunityBody = () => {
    setShowCommunityBody(!showCommunityBody);
  };

  return (
    <Fragment>
      <motion.div
        style={{ background }}
        whileHover={{ scale: 1.01 }}
        className="w-full h-[32vh] md:h-[27vh] flex flex-col md:flex-row justify-around duration-300"
      >
        <div className="w-full md:w-8/12 text-center md:text-left">
          <div className="my-auto text-white font-extrabold text-2xl md:text-5xl px-4 md:px-20 md:pt-10 pt-0 pb-2">
            Welcome to Devcomm Community
          </div>
          <div className="px-4 md:px-20 text-white font-thin text-sm md:text-xl">
            Place where tech heads are made
          </div>
          <Link to="/discover">
            <motion.div
              className="text-[#0000ff] text-xs font-normal bg-white text-center w-[60%] mx-auto md:w-1/4 py-1 rounded-md px-5 md:ml-20 mt-4 md:mt-7"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
            >
              Explore other communities
            </motion.div>
          </Link>
        </div>

        <div className="flex w-full md:w-3/12 justify-center md:justify-end mr-0 md:mr-10 hidden md:block">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x }}
            className="w-1/2 md:w-full"
          >
            <img src={image6} alt="" className="w-full" />
          </motion.div>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-around w-full md:w-[95%] mx-auto mt-4 md:mt-0">
        <div className="w-full md:w-1/5 md:ml-10 mx-auto">
          <button
            className="text-[#0000ff] text-sm font-normal bg-white text-center w-[100%] md:w-1/4 py-1 rounded-md px-5 md:ml-20 mt-4 md:mt-7 md:hidden mx-auto"
            onClick={toggleCommunityBody}
          >
            Show Community People
          </button>
          {showCommunityBody && <Communitybody />}
        </div>
        
        <motion.div className="w-[90%] mx-auto md:w-5/5 md:mx-7 mt-4 md:mt-12 mb-6">
          <Communitypost />
        </motion.div>
      </div>
    </Fragment>
  );
}
