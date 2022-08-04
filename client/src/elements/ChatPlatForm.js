import React from "react";
import Header from "../components/ChatPlatForm/Header";
import MessageInput from "../components/ChatPlatForm/MessageInput";
import Messages from "../components/ChatPlatForm/Messages";

const ChatPlatForm = () => {
    return (
        <section className="msger">
            <Header />
            <Messages />
            <MessageInput />
        </section>
    );
    };

export default ChatPlatForm;
