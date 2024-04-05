import React , {Fragment} from "react";
import {
    motion,
    useMotionValue,
    useTransform,
  } from "framer-motion"

import {Link} from 'react-router-dom';
import image6 from './image6.svg';
import Communitycard from './Communitycard';


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
            <motion.div style={{ background }} whileHover={{scale:1.01}} className="w-[100vw] h-[50vh] flex justify-around duration-300">
                  <div className="w-8/12">
                      <div className="my-auto text-white font-extrabold text-5xl px-20 py-20">
                          Go beyond bios! Find unexpected connections in communities you love. 
                      </div>
                      <div className="px-20 text-white font-thin text-2xl">
                          Discover communities around your interests.
                      </div>
                  </div>

              <div className="flex flex-col w-3/12 mr-10">
                  <div>
                      <img src={image6} alt="" />
                  </div>
                  

                  <Link to="/signin">
                      <motion.div className="text-[#0000ff] text-lg font-light bg-white text-center mt-[-5%] w-[50%] py-[3px] rounded-md px-5 mx-auto"
                          whileHover={{scale:1.1}}
                          whileTap={{scale:1}}>
                          Make Your own
                      </motion.div>
                  </Link>
              </div>
              
            </motion.div>

            <div className="w-[95%] mx-auto">
            <div className="flex justify-around">
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
            </div>

            <motion.div initial={{opacity:0}}
              whileInView={{opacity:1}} className="flex justify-around duration-500">
              <motion.div >
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
            </motion.div>

            <motion.div initial={{opacity:0}}
              whileInView={{opacity:1}}  className="flex justify-around duration-500">
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
            </motion.div>
            </div>
          </Fragment>
          
        )
      }
