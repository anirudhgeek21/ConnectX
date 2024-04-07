import react,{Fragment} from  "react";
import { motion }from 'framer-motion'; 

export default function Help(){
    return(
        <Fragment>
            <motion.div className="flex flex-col md:w-[45vw] w-[85vw] mx-auto mt-10 border-slate-300 mb-2 text-slate-500"> 
            <motion.div whileHover={{ scale: 1.06 }} className="text-center w-[100%] border border-b-[0.1px] border-slate-300 px-2 py-2 mb-2 hover:text-blue-600 duration-150 hover:border-blue-600">
                 Getting Started: A Beginner's Guide
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} className="text-center w-[100%] border border-b-[0.01px] border-slate-300 px-2 py-2 mb-2 hover:text-blue-600 duration-150 hover:border-blue-600">
                 Account Setup and Management
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} className="text-center w-[100%] border border-b-[0.1px] border-slate-300 px-2 py-2 mb-2 hover:text-blue-600 duration-150 hover:border-blue-600">
                 Privacy and Security Settings
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} className="text-center w-[100%] border border-b-[0.1px] border-slate-300 px-2 py-2 mb-2 hover:text-blue-600 duration-150 hover:border-blue-600">
                 Profile Creation Tips
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} className="text-center w-[100%] border border-b-[0.1px] border-slate-300 px-2 py-2 mb-2 hover:text-blue-600 duration-150 hover:border-blue-600">
                 Finding Friends: Search and Connect
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} className="text-center w-[100%] border border-b-[0.1px] border-slate-300 px-2 py-2 mb-2 hover:text-blue-600 duration-150 hover:border-blue-600">
                 Messaging and Communication Features
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} className="text-center w-[100%] border border-b-[0.1px] border-slate-300 px-2 py-2 mb-2 hover:text-blue-600 duration-150 hover:border-blue-600">
                 Exploring Features: Stories, Feeds, and Timelines
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} className="text-center w-[100%] border border-b-[0.1px] border-slate-300 px-2 py-2 mb-2 hover:text-blue-600 duration-150 hover:border-blue-600">
                 Reporting and Blocking Users
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} className="text-center w-[100%] border border-b-[0.1px] border-slate-300 px-2 py-2 mb-2 hover:text-blue-600 duration-150 hover:border-blue-600">
                 Troubleshooting and FAQs
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} className="text-center w-[100%] border border-b-[0.1px] border-slate-300 px-2 py-2 mb-2 hover:text-blue-600 duration-150 hover:border-blue-600">
                 Community Guidelines and Policies
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} className="text-center w-[100%] border border-b-[0.1px] border-slate-300 px-2 py-2 mb-2 hover:text-blue-600 duration-150 hover:border-blue-600">
                 Dating Safety Tips
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} className="text-center w-[100%] border border-b-[0.1px] border-slate-300 px-2 py-2 mb-2 hover:text-blue-600 duration-150 hover:border-blue-600">
                 Matchmaking Algorithms and Filters
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} className="text-center w-[100%] border border-b-[0.1px] border-slate-300 px-2 py-2 mb-2 hover:text-blue-600 duration-150 hover:border-blue-600">
                 Creating a Winning Bio
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} className="text-center w-[100%] border border-b-[0.1px] border-slate-300 px-2 py-2 mb-2 hover:text-blue-600 duration-150 hover:border-blue-600">
                 Uploading Photos and Media
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} className="text-center w-[100%] border border-b-[0.1px] border-slate-300 px-2 py-2 mb-2 hover:text-blue-600 duration-150 hover:border-blue-600">
                 Meeting Up: Planning Dates Safely
            </motion.div>

            </motion.div>
        </Fragment>
    )
}