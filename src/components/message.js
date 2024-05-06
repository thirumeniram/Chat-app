// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import '../App.css';  // Assuming this path is correct based on your project structure

// function Message({ message, setMessages, messages, index }) {
//   const likeMessage = () => {
//     const newMessages = [...messages];
//     newMessages[index].likes += 1;
//     setMessages(newMessages);
//   };

//   return (
//     <div className="message">
//       <div>{message.user}: {message.text}</div>
//       <div className="like-container">
//         <button className="heart-button" onClick={likeMessage}>
//           <FontAwesomeIcon icon={faHeart} color="red" />
//         </button>
//         <span className="likes-count">{message.likes}</span>
//       </div>
//     </div>
//   );
// }

// export default Message;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../App.css';  // Assuming this path is correct based on your project structure

function Message({ message, setMessages, messages, index }) {
  const likeMessage = () => {
    const newMessages = [...messages];
    newMessages[index].likes += 1;
    setMessages(newMessages);
  };

  return (
    <div className="message">
      <div>{message.user}: {message.text}</div>
      <div className="like-container">
        <button className="heart-button" onClick={likeMessage}>
          <FontAwesomeIcon icon={faHeart} color="red" />
        </button>
        <span className="likes-count">{message.likes}</span>
      </div>
    </div>
  );
}

export default Message;

