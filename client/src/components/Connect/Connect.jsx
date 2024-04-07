import React , {Fragment} from "react";
import {
    motion,
    useMotionValue,
    useTransform,
  } from "framer-motion"

import {Link} from 'react-router-dom';
import image6 from './image10.svg';
import Communitycard from "../Discover/Communitycard";
import ConnectCard from '../Connect/ConnectCards';


export default function Event() {
    
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
            <motion.div style={{ background }} whileHover={{scale:1.01}} className="w-[100vw] h-[43vh] flex flex-row-reverse justify-around duration-300">

                <div className="w-8/12">
                    <div className="my-auto text-white font-extrabold text-5xl px-20 pt-10 pb-2">
                        Make meaningful connections on campus 
                    </div>
                    <div className="px-20 text-white font-thin text-xl">
                       Get to know them betten and make amazing plans or join our events together
                    </div>
                    <Link to="/discover">
                    <motion.div className="text-[#0000ff] text-sm font-normal bg-white text-center w-[14%] py-1 rounded-md px-5 ml-20 mt-7"
                        whileHover={{scale:1.1}}
                        whileTap={{scale:1}}>
                        See events
                    </motion.div>
                    </Link>
                </div>

                <div className="flex flex-col w-3/12 mr-4 mt-7">
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


            <motion.div className="mt-8 text-2xl font-thin text-center text-green-700 mb-[-5px]">Peeps online</motion.div>
            <motion.div initial={{opacity:0}}
              whileInView={{opacity:1}}  className="flex justify-around duration-500 w-[90vw] mx-auto">
              <motion.div initial={{opacity:0}}
              whileInView={{opacity:1}} >
              <ConnectCard text="🟢 online"/>
              </motion.div>
              
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
            </motion.div>


            <motion.div initial={{opacity:0}}
              whileInView={{opacity:1}}  className="flex justify-around duration-500 w-[90vw] mx-auto mt-3">
              <motion.div initial={{opacity:0}}
              whileInView={{opacity:1}} >
              <ConnectCard text="🟢 online"/>
              </motion.div>
              
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
            </motion.div>



            <motion.div initial={{opacity:0}}
              whileInView={{opacity:1}}  className="flex justify-around duration-500 w-[90vw] mx-auto mt-3">
              <motion.div initial={{opacity:0}}
              whileInView={{opacity:1}} >
              <ConnectCard text="🟢 online"/>
              </motion.div>
              
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
            </motion.div>



            <motion.div initial={{opacity:0}}
              whileInView={{opacity:1}}  className="flex justify-around duration-500 w-[90vw] mx-auto mt-3">
              <motion.div initial={{opacity:0}}
              whileInView={{opacity:1}} >
              <ConnectCard text="🟢 online"/>
              </motion.div>
              
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
            </motion.div>

            
            <motion.div className="mt-16 text-2xl font-thin text-center text-red-700 mb-[-5px] ">Peeps offline</motion.div>
            <motion.div initial={{opacity:0}}
              whileInView={{opacity:1}}  className="flex justify-around duration-500 w-[90vw] mx-auto">
              <motion.div initial={{opacity:0}}
              whileInView={{opacity:1}} >
              <ConnectCard />
              </motion.div>
              
              <div>
              <ConnectCard />
              </div>
              <div>
              <ConnectCard />
              </div>
              <div>
              <ConnectCard />
              </div>
              <div>
              <ConnectCard />
              </div>
              <div>
              <ConnectCard />
              </div>
              <div>
              <ConnectCard />
              </div>
              <div>
              <ConnectCard />
              </div>
            </motion.div>


            <motion.div initial={{opacity:0}}
              whileInView={{opacity:1}}  className="flex justify-around duration-500 w-[90vw] mx-auto mt-3">
              <motion.div initial={{opacity:0}}
              whileInView={{opacity:1}} >
              <ConnectCard />
              </motion.div>
              
              <div>
              <ConnectCard />
              </div>
              <div>
              <ConnectCard />
              </div>
              <div>
              <ConnectCard />
              </div>
              <div>
              <ConnectCard />
              </div>
              <div>
              <ConnectCard />
              </div>
              <div>
              <ConnectCard />
              </div>
              <div>
              <ConnectCard />
              </div>
            </motion.div>
            
            
            


                
          </Fragment>
          
        )
      }
