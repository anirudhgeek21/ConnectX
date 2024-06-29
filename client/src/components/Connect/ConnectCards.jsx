import React, { Fragment } from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";


export default function Communitycard(prop) {
  return (
    <Fragment className="h-[100px]">
      <Link to="/connect/chat">
        <motion.div
            className="rounded-lg shadow-md w-[95%] mx-auto text-black border-black mt-7"
            whileHover={{ scale: 1.1 }}
            whileTap={{scale: 1}}
        >
            
            <motion.div className="w-[84%] text-center mx-auto font-bold text-lg mt-4 pt-4 ">
            Anirudh Prajapati
            </motion.div>
            <motion.div className="text-center text-xs px-6 font-thin  mt-2 overflow-y-auto">  
            19 yo Boy NSUT
            </motion.div>

            <motion.div className="text-center text-green-700 text-xs px-6 mt-1 font-light overflow-y-auto py-3 pb-4">  
            {prop.text}
            </motion.div>
        </motion.div>
      </Link>
    </Fragment>
  );
}
