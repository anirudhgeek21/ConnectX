import React, { Fragment } from "react";
import { motion } from 'framer-motion';

export default function Solvecard({ image, title, description }) {
  return (
    <Fragment>
      <motion.div
        className="flex flex-col w-full mx-auto rounded-md text-black"
        whileHover={{ scale: 1.1 }}
      >
        <div className="rounded-md h-[200px] overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <motion.div className="text-center font-bold text-xl pt-4 h-[50px]">
          {title}
        </motion.div>
        <motion.div className="text-center mt-3 text-base px-6 mb-5 font-thin h-[150px] overflow-y-auto">
          {description}
        </motion.div>
      </motion.div>
    </Fragment>
  );
}
