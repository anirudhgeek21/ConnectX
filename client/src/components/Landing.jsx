import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

export default function Landing() {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, #0000ff 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 155) 100%)"
  ]);
  const color = useTransform(x, xInput, [
    "rgb(255, 255, 255)",
    "rgb(255, 255, 255)",
    "rgb(3, 209, 0)"
  ]);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);

  return (
    <div>
      <motion.div 
        style={{ background }} 
        className="w-full h-[50vh] flex flex-col md:flex-row justify-around items-center p-4 md:p-0"
      >
        <div className="w-full md:w-8/12 text-center md:text-left md:mt-[-3%]">
          <div className="my-auto text-white font-extrabold text-2xl md:text-5xl p-4 md:px-20">
            Your Place to enjoy and make meaningful connections with anonymity and without hesitation
          </div>
          <div className="px-4 md:px-20 text-white font-thin text-sm md:text-2xl">
            Try dragging the circle to get a hint of what awaits you.
          </div>
        </div>

        <div className="flex flex-col w-full md:w-3/12 mt-8 md:mt-0 items-center md:items-end">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x }}
            className="w-[80%] md:w-full"
          >
            <svg className="progress-icon w-[50%] mx-auto hidden md:block" viewBox="0 0 50 50">
              <motion.path
                fill="none"
                strokeWidth="2"
                stroke={color}
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{ translateX: 5, translateY: 5 }}
              />
              <motion.path
                fill="none"
                strokeWidth="2"
                stroke={color}
                d="M14,26 L 22,33 L 35,16"
                strokeDasharray="0 1"
                style={{ pathLength: tickPath }}
              />
              <motion.path
                fill="none"
                strokeWidth="2"
                stroke={color}
                d="M17,17 L33,33"
                strokeDasharray="0 1"
                style={{ pathLength: crossPathA }}
              />
              <motion.path
                fill="none"
                strokeWidth="2"
                stroke={color}
                d="M33,17 L17,33"
                strokeDasharray="0 1"
                style={{ pathLength: crossPathB }}
              />
            </svg>
          </motion.div>

          <Link to="/signup">
            <motion.div className="text-[#0000ff] text-xs md:text-lg font-light bg-white text-center md:mt-8 mt-[-20%] w-[100%] md:w-[100%] md:px-10 py-2 px-5 rounded-md md:mr-56"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
            >
              Enter the world
            </motion.div>
          </Link>
        </div>
      </motion.div>

    
    </div>
  );
}
