import React,{Fragment , useState} from "react";
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";
import image1 from './image1.svg';


export default function Signin() {
    return (
        <Fragment>
            <div className="md:w-[100vw] md:h-[80vh] text-black mx-auto pt-20 ">
                <div className="flex justify-around">
                    <div className="my-auto w-[50%]">
                        <div className="text-center text-3xl font-thin">
                            Welcome Back
                        </div>

                        <form className="w-[100%] mx-auto">
                            <div className="text-center">
                                <div className="md:w-[60%] w-[60%] mx-auto mt-5">
                                    <input type="text" placeholder="email" className="w-[100%] text-center mx-auto border-[0.01px] px-2 py-1 border-black"/>
                                </div>
                                <div className="md:w-[60%] w-[60%] mx-auto mt-3">
                                    <input type="text" placeholder="password" className="w-[100%] text-center mx-auto border-[0.01px] px-2 py-1 border-black" />
                                </div>
                                <motion.div className="button md:w-[9%] w-[14%] rounded-md mx-auto mt-6 py-1 border-[0.05px] border-blue-500 hover:bg-blue-600 hover:text-white duration-200 font-thin hover:font-normal"
                                whileHover={{scale:1.1}}>
                                    <button className="hover:text-white">Login</button>
                                </motion.div>

                                <div className="text-base mt-6 font-thin">
                                    Not joined us yet ? <Link to="/signup"><motion.span className="text-blue-700 mt-auto"
                                    whileHover={{scale:1.1}}>Signup</motion.span></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div>
                        <img src={image1} alt="" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}