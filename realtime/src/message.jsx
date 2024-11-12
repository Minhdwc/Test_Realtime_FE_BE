import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';

const ChatComponent = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    // Kết nối Pusher
    const pusher = new Pusher('4573c09510b8a785e0cb', {
      cluster: 'ap1',
    });
    // Lắng nghe sự kiện 'message' từ channel
    const channel = pusher.subscribe('chat');
    console.log(channel);
    channel.bind('message', (data) => {
      alert(JSON.stringify(data))
      setMessages((prevMessages) => [...prevMessages, data.message]);
    });

    // Cleanup Pusher khi component unmount
    return () => {
      pusher.unsubscribe('chat');
    };
  }, []); // Chỉ chạy một lần khi component mount

  const sendMessage = async () => {
    if (message) {
      // Gửi tin nhắn đến API backend Laravel
      await fetch('http://localhost:8000/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      setMessage(''); // Xóa ô nhập sau khi gửi
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;
