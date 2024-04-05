import React,{Fragment} from "react";
import {motion} from 'framer-motion';
import profile from './profile.svg';

export default function Communitybody() {
    return(
        <Fragment>
            <motion.div className="flex mt-10 text-center h-[67vh] overflow-y-auto">

                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="people flex-col w-[100%] mx-auto">
                    <motion.div className="text-xl py-1 rounded-md bg-[#0000ff] font-semibold mb-4 ml-[5.3rem] rotate-[270deg] fixed text-white left-[-8.3%] px-4 top-[46%]">Peeps</motion.div>
                    <motion.div whileHover={{scale:1.1}} className="flex mb-2 justify-around font-light">
                        <img class="w-10 h-10 rounded-full mb-1" src={profile} alt="Rounded avatar"></img>
                        <div className="my-auto">Anirudh</div>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1}} className="flex mb-2 justify-around font-light">
                        <img class="w-10 h-10 rounded-full mb-1" src={profile} alt="Rounded avatar"></img>
                        <div className="my-auto">Anirudh</div>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1}} className="flex mb-2 justify-around font-light">
                        <img class="w-10 h-10 rounded-full mb-1" src={profile} alt="Rounded avatar"></img>
                        <div className="my-auto">Anirudh</div>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1}} className="flex mb-2 justify-around font-light">
                        <img class="w-10 h-10 rounded-full mb-1" src={profile} alt="Rounded avatar"></img>
                        <div className="my-auto">Anirudh</div>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1}} className="flex mb-2 justify-around font-light">
                        <img class="w-10 h-10 rounded-full mb-1" src={profile} alt="Rounded avatar"></img>
                        <div className="my-auto">Anirudh</div>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1}} className="flex mb-2 justify-around font-light">
                        <img class="w-10 h-10 rounded-full mb-1" src={profile} alt="Rounded avatar"></img>
                        <div className="my-auto">Anirudh</div>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1}} className="flex mb-2 justify-around font-light">
                        <img class="w-10 h-10 rounded-full mb-1" src={profile} alt="Rounded avatar"></img>
                        <div className="my-auto">Anirudh</div>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1}} className="flex mb-2 justify-around font-light">
                        <img class="w-10 h-10 rounded-full mb-1" src={profile} alt="Rounded avatar"></img>
                        <div className="my-auto">Anirudh</div>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1}} className="flex mb-2 justify-around font-light">
                        <img class="w-10 h-10 rounded-full mb-1" src={profile} alt="Rounded avatar"></img>
                        <div className="my-auto">Anirudh</div>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1}} className="flex mb-2 justify-around font-light">
                        <img class="w-10 h-10 rounded-full mb-1" src={profile} alt="Rounded avatar"></img>
                        <div className="my-auto">Anirudh</div>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1}} className="flex mb-2 justify-around font-light">
                        <img class="w-10 h-10 rounded-full mb-1" src={profile} alt="Rounded avatar"></img>
                        <div className="my-auto">Anirudh</div>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1}} className="flex mb-2 justify-around font-light">
                        <img class="w-10 h-10 rounded-full mb-1" src={profile} alt="Rounded avatar"></img>
                        <div className="my-auto">Anirudh</div>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1}} className="flex mb-2 justify-around font-light">
                        <img class="w-10 h-10 rounded-full mb-1" src={profile} alt="Rounded avatar"></img>
                        <div className="my-auto">Anirudh</div>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1}} className="flex mb-2 justify-around font-light">
                        <img class="w-10 h-10 rounded-full mb-1" src={profile} alt="Rounded avatar"></img>
                        <div className="my-auto">Anirudh</div>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1}} className="flex mb-2 justify-around font-light">
                        <img class="w-10 h-10 rounded-full mb-1" src={profile} alt="Rounded avatar"></img>
                        <div className="my-auto">Anirudh</div>
                    </motion.div>
                    <motion.div whileHover={{scale:1.1}} className="flex mb-2 justify-around font-light">
                        <img class="w-10 h-10 rounded-full mb-1" src={profile} alt="Rounded avatar"></img>
                        <div className="my-auto">Anirudh</div>
                    </motion.div>
                </motion.div>

                

                <motion.div className="chat">

                </motion.div>

            </motion.div>
        </Fragment>
    )
}