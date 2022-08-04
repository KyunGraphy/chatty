import React from "react";

const MessageInput = () => {
    return (
        <form className="msger-inputarea">
        <input
            type="text"
            className="msger-input"
            placeholder="Type your message"
        />
        <button className="msger-send-btn" type="submit">
            Send
        </button>
        </form>
    );
};

export default MessageInput;
