import React, { Fragment } from "react";
import { motion } from 'framer-motion';
import Solvecard from './Solvecard';
import image3 from './image3.svg';
import image4 from './image4.svg';
import image5 from './image5.svg';
import image7 from './image7.svg';

const solveCards = [  
  { image: image3, title: "Connect", description: "Make lifelong friends & explore connections on campus. Uncover hidden gems you wouldn't have found otherwise." },
  { image: image4, title: "Discover", description: "Discover shared interests & build meaningful connections. See who you vibe with beyond profile pictures." },
  { image: image5, title: "Explore", description: "Build friendships & find connections in shared communities. Connect goes beyond dating, find your community squad." },
  { image: image7, title: "Live Life", description: "Make college unforgettable with new friends by your side. Find adventure buddies & experience college together." },
];

export default function Solve() {
  return (
    <Fragment>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12 w-[95%] mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {solveCards.map((cardData) => (
          <div key={cardData.title} className="flex justify-center">
            <Solvecard image={cardData.image} title={cardData.title} description={cardData.description} />
          </div>
        ))}
      </motion.div>
    </Fragment>
  );
}
