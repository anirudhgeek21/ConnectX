import React, { Fragment } from "react";
import { motion } from 'framer-motion';
import profile from './profile.svg';

export default function Communitybody() {
    return (
        <Fragment>
            <motion.div className="flex flex-col md:flex-row mt-10 text-center h-[67vh] overflow-y-auto">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="people flex-col w-full md:w-1/3 mx-auto">
                    <motion.div className="hidden md:block text-xl py-1 rounded-md bg-blue-500 font-semibold mb-4 ml-0 md:ml-20 rotate-0 md:rotate-[270deg] fixed md:text-white md:left-[-7.8%] px-4 top-[2%] md:top-[46%]">
                        Peeps
                    </motion.div>
                    {Array.from({ length: 16 }, (_, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.1 }} className="flex mb-2 justify-around font-light md:ml-[-100%]">
                            <img className="w-10 h-10 rounded-full mb-1" src={profile} alt="Rounded avatar"></img>
                            <div className="my-auto">Anirudh</div>
                        </motion.div>
                    ))}
                </motion.div>

            </motion.div>
        </Fragment>
    )
}
