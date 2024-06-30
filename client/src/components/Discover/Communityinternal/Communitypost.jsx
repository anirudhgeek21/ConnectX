import React, { Fragment, useState } from "react";
import { motion } from 'framer-motion';
import profile from './profile.svg';
import image6 from './image6.svg';
import { FaThumbsUp, FaComment } from 'react-icons/fa';

export default function Communitypost() {
    const [selectedPost, setSelectedPost] = useState(null);
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState([]);

    const postsData = [
        { id: 1, username: "user1", content: "Content 1", timestamp: "10h" },
        { id: 2, username: "user2", content: "Content 2", timestamp: "10h" },
        { id: 3, username: "user2", content: "Content 2", timestamp: "10h" },
        { id: 4, username: "user3", content: "Content 3", timestamp: "10h" },
        { id: 5, username: "user1", content: "Content 1", timestamp: "10h" },
        { id: 6, username: "user2", content: "Content 2", timestamp: "10h" },
        { id: 7, username: "user3", content: "Content 3", timestamp: "10h" },
        { id: 8, username: "user1", content: "Content 1", timestamp: "10h" },
        { id: 9, username: "user2", content: "Content 2", timestamp: "10h" },
        { id: 10, username: "user3", content: "Content 3", timestamp: "10h" },
        { id: 11, username: "user1", content: "Content 1", timestamp: "10h" },
        { id: 12, username: "user2", content: "Content 2", timestamp: "10h" },
        { id: 13, username: "user3", content: "Content 3", timestamp: "10h" },
        { id: 14, username: "user3", content: "Content 3", timestamp: "10h" },
    ];

    const handleOpenModal = (post) => {
        setSelectedPost(post);
        setComments([]);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (commentText.trim()) {
            setComments([...comments, commentText]);
            setCommentText('');
        }
    };

    return (
        <Fragment>
            {selectedPost && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed top-0 md:left-0 w-full h-full flex justify-center items-center ml-[-5%] md:ml-0 bg-black bg-opacity-50 z-50"
                    onClick={handleCloseModal}
                >
                    <motion.div
                        className="bg-white rounded-lg shadow-lg h-[65%] md:py-9 md:px-10 w-[90%] p-5 py-6 sm:w-[20%] lg:w-[60%] md:h-[80%] md:max-h-full overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img src={profile} alt="Profile Picture" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full" />
                                <div className="ml-4">
                                    <div className="font-medium">{selectedPost.username}</div>
                                    <div className="text-gray-500 text-sm">{selectedPost.timestamp}</div>
                                </div>
                            </div>
                            <button onClick={handleCloseModal} className="text-gray-600">X</button>
                        </div>
                        <div className="px-4 py-3 break-words">
                            <motion.div>
                                <img src={image6} alt="" className="mx-auto w-full sm:w-[50%] mt-3" />
                            </motion.div>
                            <div className="text-center mt-5">
                                {selectedPost.content}
                            </div>
                        </div>
                        <div className="flex justify-around my-4">
                            <button className="flex items-center text-gray-600 hover:text-blue-500">
                                <FaThumbsUp className="mr-2" /> Like
                            </button>
                            <button className="flex items-center text-gray-600 hover:text-blue-500">
                                <FaComment className="mr-2" /> Comment
                            </button>
                        </div>
                        <form onSubmit={handleCommentSubmit} className="my-4">
                            <textarea
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                className="w-full p-2 border rounded"
                                placeholder="Write a comment..."
                            />
                            <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded mt-2">Submit</button>
                        </form>
                        <div className="mt-4">
                            {comments.map((comment, index) => (
                                <div key={index} className="border-t py-2">
                                    {comment}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-8 px-4 md:px-0 gap-4 md:mx-0 md:gap-6">
                {postsData.map(post => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white rounded-2xl shadow-md cursor-pointer overflow-hidden"
                        onClick={() => handleOpenModal(post)}
                    >
                        <div className="flex items-center px-4 py-2">
                            <img src={profile} alt="Profile Picture" className="w-10 h-10 rounded-full mr-2" />
                            <div className="font-medium">{post.username}</div>
                        </div>
                        <div className="px-4 py-3 break-words">
                            <img src={image6} alt="" className="w-full" />
                            <div>{post.content}</div>
                        </div>
                        <div className="text-gray-500 text-sm px-4 py-2">
                            {post.timestamp}
                        </div>
                        <div className="flex justify-around py-2 border-t">
                            <button className="flex items-center text-gray-600 hover:text-blue-500">
                                <FaThumbsUp className="mr-2" /> Like
                            </button>
                            <button className="flex items-center text-gray-600 hover:text-blue-500">
                                <FaComment className="mr-2" /> Comment
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Fragment>
    )
}
