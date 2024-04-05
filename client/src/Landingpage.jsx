import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

import Navbarlanding from './components/Navbars/Navbarlanding';
import Landing from './components/Landing';
import Solve from './components/Solve/Solve';
import Signin from './components/Authentications/Signin'; 
import Signup from './components/Authentications/Signup'; 
import Footer from './components/Footer';

export default function Landingpage() {
  return (
    <Router>
      <div className="h-[100%] cursor-default flex flex-col">
        <Navbarlanding />

        <Routes>
          <Route path="/" element={
            <div className=''>
                <motion.div className='mt-3 duration-500'
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
          <Route path="/signin" element={
            <motion.div className='duration-500'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            
            >
            <Signin />
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
          
        </Routes>
      </div>

      <motion.div
      className='duration-500 mt-52'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}>
        <Footer />
      </motion.div>
    </Router>
  );
}
