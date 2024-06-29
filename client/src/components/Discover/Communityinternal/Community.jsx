import React , {Fragment} from "react";
import {
    motion,
    useMotionValue,
    useTransform,
  } from "framer-motion"

import {Link} from 'react-router-dom';
import image6 from './image6.svg';
import Communitybody from "./Communitybody";
import Communitypost from './Communitypost';
import Communitychat from './Communitychat';


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
          <Fragment>
            <motion.div style={{ background }} whileHover={{scale:1.01}} className="w-[100vw] h-[27vh] flex flex-row-reverse justify-around duration-300">

                <div className="w-8/12">
                    <div className="my-auto text-white font-extrabold text-5xl px-20 pt-10 pb-2">
                        Welcome to Devcomm Community
                    </div>
                    <div className="px-20 text-white font-thin text-xl">
                        Place where tech heads are made
                    </div>
                    <Link to="/discover">
                    <motion.div className="text-[#0000ff] text-sm font-normal bg-white text-center w-[24%] py-1 rounded-md px-5 ml-20 mt-7"
                        whileHover={{scale:1.1}}
                        whileTap={{scale:1}}>
                        Explore other communities
                    </motion.div>
                    </Link>
                </div>

                <div className="flex flex-col w-3/12 mr-10">
                <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                style={{ x }}
                className=" w-full"
                >
                    <img src={image6} alt="" />

                    

                </motion.div>


                </div>



            </motion.div>

            <div className="flex justify-around w-[95%] mx-auto">
                <div className="w-[10%] ml-10">
                    <Communitybody />
                </div>
                <motion.div className="w-[80%] ml-36 mr-16 mt-12 mb-6">
                        <Communitypost />
                </motion.div>
                {/* <div className="w-[25%] h-[50vh] mt-12">
                    <Communitychat />
                </div> */}

            </div>

            


                
          </Fragment>
          
        )
      }
