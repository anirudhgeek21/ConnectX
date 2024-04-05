import React , {Fragment} from "react";
import {
    motion,
    useMotionValue,
    useTransform,
  } from "framer-motion"

import {Link} from 'react-router-dom';


export default function Landing() {
    
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
    const tickPath = useTransform(x, [10, 100], [0, 1]);
    const crossPathA = useTransform(x, [-10, -55], [0, 1]);
    const crossPathB = useTransform(x, [-50, -100], [0, 1]);
      
        return (
          <motion.div style={{ background }} className="w-[100vw] h-[50vh] flex justify-around">
                <div className="w-8/12">
                    <div className="my-auto text-white font-extrabold text-5xl px-20 py-20">
                        Your Place to enjoy and make meaningfull connection with annonimity and without hesitation
                    </div>
                    <div className="px-20 text-white font-thin text-2xl">
                        Try Side Draging the circle to get a hint what awaits you.
                    </div>
                </div>

            <div className="flex flex-col w-3/12 mr-10">
                <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                style={{ x }}
                className=" w-full"
                >
                    
                <svg className="progress-icon w-[40%] mx-auto mt-20" viewBox="0 0 50 50" >
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

                <Link to="/signin">
                    <motion.div className="text-[#0000ff] text-lg font-light bg-white mt-[4.7rem] text-center w-[50%] py-1 rounded-md px-5 mx-auto"
                        whileHover={{scale:1.1}}
                        whileTap={{scale:1}}>
                        Enter the world
                    </motion.div>
                </Link>
            </div>
            
          </motion.div>
          
        )
      }