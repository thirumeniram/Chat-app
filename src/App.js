// import React, { useState } from 'react';
// import Message from './components/message';  // Make sure this import matches the actual file path and name
// import './App.css';

// const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const sendMessage = () => {
//     if (input.trim()) {
//       const user = user_list[Math.floor(Math.random() * user_list.length)];
//       const newMessage = { text: input, user: user, likes: 0 };
//       setMessages([...messages, newMessage]);
//       setInput('');
//     }
//   };

//   return (
//     <div id="app-container">
//       <div id="sidebar">
//         <div id="sidebar-content">
//           <h2>Groups</h2>
//           <ul>
//             <ul>Group 1</ul>
//             {/* Add more groups as needed */}
//           </ul>
//         </div>
//       </div>
//       <div id="chat-container">
//         <div id="chat-messages">
//           {messages.map((msg, index) => (
//             <Message key={index} message={msg} setMessages={setMessages} messages={messages} index={index} />
//           ))}
//         </div>
//         <div id="input-container">
//           <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
//           <button onClick={sendMessage}>Send</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Message from './components/message';  // Make sure this import matches the actual file path and name
import './App.css';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      const user = user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = { text: input, user: user, likes: 0 };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  return (
    <div id="app-container">
      <div id="sidebar">
        <div id="sidebar-content">
          <h2>Groups</h2>
          <ul>
            <li>Group 1</li>
            {/* Add more groups as needed */}
          </ul>
        </div>
      </div>
      <div id="chat-container">
        <div id="chat-messages">
          {messages.map((msg, index) => (
            <Message key={index} message={msg} setMessages={setMessages} messages={messages} index={index} />
          ))}
        </div>
        <div id="input-container">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
