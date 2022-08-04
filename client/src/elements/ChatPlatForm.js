import React, { useState, useEffect } from 'react';

import MessageInput from '../components/ChatPlatForm/MessageInput';

import io from 'socket.io-client';

import AllMessages from '../components/ChatPlatForm/AllMessages';
import { useParams } from 'react-router';
import Header from '../components/ChatPlatForm/Header';

let socket;

const ChatPlatform = () => {
  // const [visible, setVisible] = useState(false);

  const [userName, setUserName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const params = useParams();

  useEffect(() => {
    const { userName, roomId } = params;

    socket = io('http://localhost:5000');

    setUserName(userName);
    setRoomId(roomId);

    socket.emit('join', { userName, roomId: roomId }, (err) => {
      if (err) {
        alert(err);
      }
    });
  }, [params]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on('roomDetails', ({ users }) => {
      setUsers(users);
    });
  }, []);

  // const showDrawer = (e) => {
  //   e.preventDefault();
  //   setVisible(true);
  // };

  // const onClose = () => {
  //   setVisible(false);
  // };

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }

    console.log(users);
  };

  return (
    <>
      <section className='msger'>
        <Header roomId={roomId}/>
        <AllMessages messages={messages} userName={userName} />
        <MessageInput
          sendMessage={sendMessage}
          message={message}
          setMessage={setMessage}
        />
      </section>
    </>
  );
};

export default ChatPlatform;
