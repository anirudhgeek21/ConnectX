import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export default function Navbarlanding() {
    const [isOpen, setIsOpen] = useState(false);
    const text = "ConnectX".split(' ');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="p-5 bg-white text-blue-600 w-[100vw] mb-auto cursor-default">
            <div className="flex justify-between items-center md:w-[90%] w-[100%] mx-auto">
                <Link to="/">
                    <motion.div 
                        className="font-extrabold text-5xl md:ml-0 ml-[1.2rem] md:mb-0 mb-3 text-left"
                        whileHover={{scale:1.1}}
                    >
                        {text.map((el, i) => (
                            <motion.span
                                className="text-blue-600 px-2 pb-1 rounded-sm mr-1"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                key={i}
                            >
                                {el}{" "}
                            </motion.span>
                        ))}
                    </motion.div>
                </Link>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <motion.div whileHover={{scale: 1.2}}>
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </motion.div>
                    </button>
                </div>
                <div className={`absolute right-0 top-14 md:top-0 md:right-0 md:relative md:flex justify-around items-center md:mt-0 ${isOpen ? "block" : "hidden"} md:flex-row flex-row bg-white mt-3 md:ml-0 ml-5 md:p-0 p-4`}>
                    <div className="px-3 text-lg font-light mb-2 md:mb-0">
                        <motion.div whileHover={{scale:1.1}} className="text-blue-600 hover:font-normal duration-100"><Link to="/signup">Join us</Link></motion.div>
                    </div>
                    <div className="px-3 text-lg font-light">
                        <motion.div whileHover={{scale:1.1}} className="text-blue-600 hover:font-normal duration-100"><Link to="/help">Help</Link></motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
