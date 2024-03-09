import React, { useEffect, useState } from "react";
import "./Chat.css";
import LogoSearch from "../../Components/ProfileSide/LogoSearch/LogoSearch";
import { useSelector } from "react-redux";
import { userChats } from "../../API/ChatRequest";
import Conversation from "../../Components/Conversation/conversation.jsx";
import NavIcons from "../../Components/Navicons.jsx";
import Ratbox from "../../Components/ChatBox/Ratbox.jsx";

const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user]);

  return (
    <div className="Chat">
      {/* left side */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div onClick={() => setCurrentChat(chat)}>
                {/* {console.log(chat._id)} */}
                <Conversation
                  key={chat._id}
                  data={chat}
                  currentUserId={user._id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          <NavIcons />
          {/* chat body */}
        </div>
        <Ratbox chat={currentChat} currentUser={user._id} />
      </div>
    </div>
  );
};

export default Chat;
