import React, { Fragment } from "react";
import { motion } from 'framer-motion';
import image6 from './image6.svg';
import { Link } from "react-router-dom";


export default function Communitycard(prop) {
  return (
    <Fragment className="h-[200px] w-[20%]">
      <Link to="/discover/community">
        <motion.div
            className="rounded-lg shadow-md flex flex-col w-[85%] mx-auto text-black border-black mt-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{scale: 1}}
        >
            <div className="rounded-md h-[200px]"> 
            <img src={image6} alt="" />
            </div>
            <motion.div className="w-[84%] text-center mx-auto font-bold text-2xl mt-9 h-[40px]">
            Devcomm
            </motion.div>
            <motion.div className="text-center text-base px-6 mb-4 font-thin h-[50px] overflow-y-auto">  
            Largest tech soc of NSUT
            </motion.div>
        </motion.div>
      </Link>
    </Fragment>
  );
}
