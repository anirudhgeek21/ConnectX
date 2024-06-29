import React, { Fragment, useState } from "react";
import { motion } from 'framer-motion';
import profile from './profile.svg';
import image6 from './image6.svg';

export default function Communitypost() {
    const [selectedPost, setSelectedPost] = useState(null);

 
    const postsData = [
        { id: 1, username: "user1", content: "Content 1", timestamp: "10h" },
        { id: 2, username: "user2", content: "Content2", timestamp: "10h" },
        { id: 3, username: "user2", content: "Content2", timestamp: "10h" },
        { id: 4, username: "user3", content: "Content 3", timestamp: "10h" },
        { id: 5, username: "user1", content: "Content 1", timestamp: "10h" },
        { id: 6, username: "user2", content: "Content2", timestamp: "10h" },
        { id: 7, username: "user3", content: "Content 3", timestamp: "10h" },
        { id: 8, username: "user1", content: "Content 1", timestamp: "10h" },
        { id: 9, username: "user2", content: "Content2", timestamp: "10h" },
        { id: 10, username: "user3", content: "Content 3", timestamp: "10h" },
        { id: 11, username: "user1", content: "Content 1", timestamp: "10h" },
        { id: 12, username: "user2", content: "Content2", timestamp: "10h" },
        { id: 13, username: "user3", content: "Content 3", timestamp: "10h" },
        { id: 14, username: "user3", content: "Content 3", timestamp: "10h" },

    ];

   
    const handleOpenModal = (post) => {
        setSelectedPost(post);
    };

  
    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    return (
        <Fragment>
            {selectedPost && (
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
                onClick={handleCloseModal}
            >
                <motion.div
                    
                    className="bg-white rounded-lg shadow-lg p-4 h-[70%] w-[60%] overflow-y-auto"
                >
                    <div>
                        <img src={profile} alt="Profile Picture" className="w-20 h-20 rounded-full mx-auto" />
                        <div className="font-medium text-center mt-2">{selectedPost.username}</div>
                    </div>
                    <div className="px-4 py-3 break-words">
                        <motion.div> 
                            <img src={image6} alt="" className="mx-auto w-[50%] mt-3" />
                        </motion.div>
                        <div className="text-center mt-5">
                            {selectedPost.content}
                        </div>
                    </div>
                    <div className="text-gray-500 text-sm text-center px-4 py-2">
                        {selectedPost.timestamp}
                    </div>
                </motion.div>
            </motion.div>
            )}

      
            <div className="grid grid-cols-4 py-8 px-16 gap-[1.5rem] h-[100%]">
                {postsData.map(post => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.5 }}
                        className="bg-white rounded-lg shadow-md mb-4 cursor-pointer overflow-y-auto"
                        onClick={() => handleOpenModal(post)}
                    >
                        <div className="flex items-center px-4 py-2" onClick={() => handleOpenModal(post)}>
                            <img src={profile} alt="Profile Picture" className="w-10 h-10 rounded-full mr-2" />
                            <div className="font-medium">{post.username}</div>
                        </div>
                        <div className="px-4 py-3 break-words" onClick={() => handleOpenModal(post)}>
                            <div>
                                <img src={image6} alt="" />
                            </div>
                            <div>
                                {post.content}
                            </div>
                        </div>
                        <div className="text-gray-500 text-sm px-4 py-2 mb-2" onClick={() => handleOpenModal(post)}>
                            {post.timestamp}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Fragment>
    )
}
