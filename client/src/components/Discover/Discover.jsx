import React, { Fragment } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import image6 from "./image6.svg";
import Communitycard from "./Communitycard";

const Landing = () => {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, #0000ff 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 155) 100%)",
  ]);
  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "rgb(255, 255, 255)",
    "rgb(3, 209, 0)",
  ]);

  return (
    <Fragment>
      <motion.div
        style={{ background }}
        whileHover={{ scale: 1.01 }}
        className="w-full h-[50vh] md:h-[47vh] flex flex-col md:flex-row justify-around items-center duration-300"
      >
        <div className="w-full md:w-8/12 px-8 md:px-20 md:mt-[-6%] text-white">
          <div className="font-extrabold text-3xl md:text-5xl md:mt-2">
            Go beyond bios! Find unexpected connections in communities you love.
          </div>
          <div className="font-thin text-sm md:text-2xl mt-3">
            Discover communities around your interests.
          </div>
        </div>

        <div className="flex flex-col w-full md:w-3/12 md:mr-10 mt-[-10%] items-center md:mt-[-6%] ">
          <div>
            <img src={image6} alt=""  className="hidden md:block"/>
          </div>

          <Link to="/signin">
            <motion.div
              className="text-[#0000ff] text-sm md:text-lg font-light bg-white text-center md:mt-[-9%] w-[100%] py-[3px] rounded-md px-5 mx-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
            >
              Make Your own
            </motion.div>
          </Link>
        </div>
      </motion.div>

      <div className="w-[95%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:pt-8">
          {Array.from({ length: 8 }, (_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6"
            >
              <Communitycard />
            </motion.div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
