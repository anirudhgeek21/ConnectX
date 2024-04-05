import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

import Navbarmain from './components/Navbars/Navbarmain';
import Landing from './components/Landing';
import Solve from './components/Solve/Solve';
import Connect from './components/Discover/Discover'
import Signup from './components/Authentications/Signup'; 
import Footer from './components/Footer';
import Community from './components/Discover/Communityinternal/Community';

export default function Landingpage() {
  return (
    <Router>
      <div className="h-[100%] cursor-default flex flex-col">
        <Navbarmain />

        <Routes>
          <Route path="/" element={
            <div className=''>
                <motion.div className='duration-500'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                >
                <Landing />
                </motion.div>
                <div className='mt-16'>
                    <Solve />
                </div>
            </div>
            
          } />
          <Route path="/discover" element={
            <motion.div className='duration-500 mt-2 mb-6'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            
            >
            <Connect />
            </motion.div>
          } /> 
          
          <Route path="/signup" element={
            <motion.div className='duration-500 '
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            
            >
            <Signup />
            </motion.div>
          } /> 
          <Route path="/discover/community" element={
            <motion.div className='duration-500 '
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            
            >
            <Community />
            </motion.div>
          } /> 
          
        </Routes>
      </div>

      <motion.div
      className='duration-500 w-[100vw] backdrop-blur-lg'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}>
        <Footer />
      </motion.div>
    </Router>
  );
}
