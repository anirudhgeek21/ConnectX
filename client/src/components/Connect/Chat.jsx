import React , {Fragment,useState,useRef} from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    
  } from "framer-motion"
import { Link } from "react-router-dom";
export default function Chat() {
  const [messages, setMessages] = useState([
    { username: "Anirudh", content: "Hello there!" },
    { username: "Anirudh", content: "How are you?" },
    { username: "Anirudh", content: "What's up?" }
  ]); 
  const messageInputRef = useRef(null); 

  const sendMessage = () => {
    const message = messageInputRef.current.value;
    if (message.trim()) { 
      setMessages([...messages, { username: "You", content: message }]);
      messageInputRef.current.value = ""; 
    }
  };
  const x = useMotionValue(0);
    const xInput = [-100, 0, 100];
    const background = useTransform(x, xInput, [
      "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
      "linear-gradient(180deg, #7700ff 0%, #0000ff 100%)",
      "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 155) 100%)"
    ]);
    const color = useTransform(x, xInput, [
      "rgb(211, 9, 225)",
      "rgb(255, 255, 255)",
      "rgb(3, 209, 0)"
    ]);
    

  return (
    <Fragment>

    <motion.div style={{ background }} whileHover={{scale:1.01}} className="w-[100vw] h-[7vh] flex flex-row-reverse justify-around duration-300">

                <div className="w-8/12">
                    <div className="my-auto text-white font-extrabold text-3xl text-center pt-[0.65rem]">
                        Anirudh Prajapati
                    </div>
                    
                </div>

            </motion.div>
    <div className="chat-container flex flex-col h-[50vh] overflow-y-auto p-4 w-[80vw] mx-auto">
        
      <div className="message-history flex-grow overflow-y-scroll">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`message-container ${
              message.username === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`message p-2 rounded-lg mt-1 ${
                message.username === "You"
                  ? "bg-blue-100 text-blue-700 self-end"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <span className="font-medium mr-2">
                {message.username === "You" ? "You" : message.username} :
              </span>
              <span>{message.content}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="message-input w-[73vw] flex items-center py-2 px-4 rounded-lg shadow-lg absolute bottom-10 right-[11.575rem] bg-slate-200">
        <input
          ref={messageInputRef}
          type="text"
          placeholder=""
          className="w-full focus:outline-none bg-inherit text-center"
        />
        <button
          className="ml-2 text-black hover:text-blue-700"
          onClick={sendMessage}
        >
          Send
        </button>
      </motion.div>
    </div>

    </Fragment>
  );
}
