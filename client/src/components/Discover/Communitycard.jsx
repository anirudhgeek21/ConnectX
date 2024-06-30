import React from "react";
import { motion } from 'framer-motion';
import image6 from './image6.svg';
import { Link } from "react-router-dom";

const Communitycard = (props) => {
  return (
    <div className="w-full md:w-5/5 p-4">
      <Link to="/discover/community">
        <motion.div
          className="rounded-2xl shadow-md flex flex-col mx-auto text-black border-black"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
        >
          <div className="rounded-md overflow-hidden">
            <img src={image6} alt="" className="w-full" />
          </div>
          <motion.div className="text-center font-bold text-xl md:text-2xl mt-3 md:mt-6">
            Devcomm
          </motion.div>
          <motion.div className="text-center text-xs mt-2 md:text-base px-6 mb-4 font-thin">
            Largest tech soc of NSUT
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
};

export default Communitycard;
