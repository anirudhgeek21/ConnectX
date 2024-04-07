import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Communitychat() {
  const [messages, setMessages] = useState([]); 
  const messageInputRef = useRef(null); 

  const sendMessage = () => {
    const message = messageInputRef.current.value;
    if (message.trim()) { 
      setMessages([...messages, { username: "You", content: message }]);
      messageInputRef.current.value = ""; 
    }
  };

  return (
    <div className="chat-container flex flex-col h-[50vh] overflow-y-auto p-4">
      <motion.div className="message-history flex-grow overflow-y-scroll ">
      <motion.div
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`message flex items-center p-2 rounded-lg mb-2 bg-slate-100 text-blue-700 self-end" : "bg-gray-100 text-gray-700"
            }`}
          >
            <span className="font-medium mr-2">mein:</span>
            <span>good</span>
          </motion.div>
          <motion.div
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`message flex items-center p-2 rounded-lg mb-2 bg-slate-100 text-blue-700 self-end" : "bg-gray-100 text-gray-700"
            }`}
          >
            <span className="font-medium mr-2">mein:</span>
            <span>good</span>
          </motion.div>
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`message flex items-center p-2 rounded-lg mb-2 ${
              message.username === "You" ? "bg-blue-100 text-blue-700 self-end" : "bg-gray-100 text-gray-700"
            }`}
          >
            <span className="font-medium mr-2">{message.username}:</span>
            <span>{message.content}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="message-input w-[17%] flex items-center py-2 px-4 rounded-lg shadow-lg absolute bottom-2 right-[3.85rem] bg-white">
        <input
          ref={messageInputRef}
          type="text"
          placeholder=""
          className="w-full focus:outline-none bg-inherit"
        />
        <button
          className="ml-2 text-blue-500 hover:text-blue-700"
          onClick={sendMessage}
        >
          Send
        </button>
      </motion.div>
    </div>
  );
}
