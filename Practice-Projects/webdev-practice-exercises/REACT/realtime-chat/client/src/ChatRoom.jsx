import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

function ChatRoom() {
  const [username, setUsername] = useState("");
  const [joined, setJoined] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("chat message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("user-connected", (username) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: "System", message: `${username} connected` },
      ]);
    });

    socket.on("user-disconnected", (username) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: "System", message: `${username} disconnected` },
      ]);
    });

    return () => {
      socket.off("chat message");
      socket.off("user-connected");
      socket.off("user-disconnected");
    };
  }, []);

  const joinChat = () => {
    if (username.trim()) {
      socket.emit("join", username);
      setJoined(true);
    }
  };

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("chat message", input);
      setInput("");
    }
  };

  if (!joined) {
    return (
      <div>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Enter your username'
        />
        <button onClick={joinChat}>Join Chat</button>
      </div>
    );
  }

  return (
    <div className='main-cont'>
      <MessageList messages={messages} user={username} />
      <MessageInput
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
      />
    </div>
  );
}

function MessageList({ messages, user }) {
  console.log(user);
  return (
    <div className='messages-cont'>
      {messages.map((msg, index) => (
        <div className='message' key={index}>
          {user === msg.user && (
            <div className='own-msg'>
              <strong>{msg.user}:</strong> {msg.message}
            </div>
          )}
          {msg.user === "System" && (
            <div className='stm-msg'>{msg.message}</div>
          )}
          {user !== msg.user && msg.user !== "System" && (
            <div className='not-own-msg'>
              <strong>{msg.user}:</strong> {msg.message}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MessageInput({ input, setInput, sendMessage }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className='input-cont'>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Type a message...'
        onKeyDown={handleKeyDown}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatRoom;
