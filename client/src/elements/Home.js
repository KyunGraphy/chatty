import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [userName, setUserName] = useState("");
    const [roomId, setRoomId] = useState("");

    return (
        <div className="content-join-form">
        <label>Enter Your Nick Name : </label>
        <input
            type="text"
            className="inputBox"
            onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <br />
        <label>Enter room Id : </label>
        <input
            type="text"
            className="inputBox"
            onChange={(e) => setRoomId(e.target.value)}
        />
        <Link to={userName && roomId ? `/chatting/${userName}/${roomId}` : ''}>
            <button className="btn-join">Join</button>
        </Link>
        </div>
    );
    };

export default Home;
