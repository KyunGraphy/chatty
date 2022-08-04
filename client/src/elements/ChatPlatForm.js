import React from "react";
import Header from "../components/ChatPlatForm/Header";
import Messages from "../components/ChatPlatForm/Messages";

const ChatPlatForm = () => {
    return (
        <section className="msger">
            <Header />
            <Messages />
        </section>
    );
    };

export default ChatPlatForm;
