import React, { Fragment } from "react";
import { motion } from 'framer-motion';

export default function Solvecard(prop) {
  return (
    <Fragment className="h-[350px] w-[20%]">
      <motion.div
        className="flex flex-col w-[85%] mx-auto rounded-md text-black"
        whileHover={{ scale: 1.1 }}
      >
        <div className="rounded-md h-[200px]">
          <img src={prop.image} alt="" />
        </div>
        <motion.div className="w-[84%] text-center mx-auto font-bold text-xl pt-4 h-[50px]">
          {prop.title}
        </motion.div>
        <motion.div className="text-center mt-3 text-base px-6 mb-5 font-thin h-[150px] overflow-y-auto">  
          {prop.description}
        </motion.div>
      </motion.div>
    </Fragment>
  );
}
