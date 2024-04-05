import React from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export default function Navbarlanding() {


    const text="ConnectX".split(' ');
    
    return (
        <div className="p-5 bg-white text-blue-600 w-[100vw] mb-auto cursor-default">
            <div className="md:flex justify-between md:w-[90%] w-[100%] mx-auto">
                <Link to="/">
                <motion.div className="font-extrabold text-5xl md:ml-0 ml-[1.2rem] md:mb-0 mb-3 text-left"
                whileHover={{scale:1.1}}>
                    {text.map((el, i) => (
                        <motion.span
                        className="text-blue-600 px-2 pb-1 rounded-sm mr-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        
                        transition={{
                            duration: 1,
                        }}
                        key={i}
                        >
                        {el}{" "}
                        </motion.span>
                    ))}
                    
                </motion.div>
                </Link>
                <div className="flex justify-around items-end md:mt-0 mt-[1.35rem]">
                    <div className="px-3 text-lg font-light">
                        <motion.div whileHover={{scale:1.1}} className="text-blue-600 hover:font-normal duration-100"><Link to="/signin">Join us</Link></motion.div>
                    </div>
                    <div className="px-3 text-lg font-light">
                        <motion.div whileHover={{scale:1.1}} className="text-blue-600 hover:font-normal duration-100">Help</motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
