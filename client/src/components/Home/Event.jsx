import React , {Fragment} from "react";
import {
    motion,
    useMotionValue,
    useTransform,
  } from "framer-motion"

import {Link} from 'react-router-dom';
import image6 from './image9.svg';
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
    
      
        return (
          <Fragment>
            <motion.div style={{ background }} whileHover={{scale:1.01}} className="w-[100vw] h-[40vh] flex flex-row-reverse justify-around duration-300">

                <div className="w-8/12">
                    <div className="my-auto text-white font-extrabold text-5xl px-20 pt-10 pb-2">
                        Live and Upcoming ConnectX events
                    </div>
                    <div className="px-20 text-white font-thin text-xl">
                        Exclusive events for you by ConnectX to energise and make your college life a blast 
                    </div>
                    <Link to="/discover">
                    <motion.div className="text-[#0000ff] text-sm font-normal bg-white text-center w-[15%] py-1 rounded-md px-5 ml-20 mt-7"
                        whileHover={{scale:1.1}}
                        whileTap={{scale:1}}>
                        View all events
                    </motion.div>
                    </Link>
                </div>

                <div className="flex flex-col w-3/12 mt-12 ml-7">
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


            <motion.div className="mt-8 text-3xl font-thin text-center">Connect with Peeps</motion.div>
            <motion.div initial={{opacity:0}}
              whileInView={{opacity:1}}  className="flex justify-around duration-500 w-[100vw] mx-auto ">
              
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
              <div>
              <ConnectCard text="🟢 online"/>
              </div>
            </motion.div>


            <motion.div className="mt-12 mb-[-18px] text-3xl font-thin text-center">Discover new groups</motion.div>
            <motion.div initial={{opacity:0}}
              whileInView={{opacity:1}}  className="flex justify-around duration-500 w-[100vw] mx-auto mb-[-20px]">
              
              <motion.div initial={{opacity:0}}
              whileInView={{opacity:1}} >
              <Communitycard />
              </motion.div>
              <div>
              <Communitycard />
              </div>
              <div>
              <Communitycard />
              </div>
              <div>
              <Communitycard />
              </div>
              <div>
              <Communitycard />
              </div>
            </motion.div>

            
            
            


                
          </Fragment>
          
        )
      }
