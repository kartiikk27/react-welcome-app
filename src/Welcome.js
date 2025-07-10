
import React, { useState } from 'react';

function Welcome({ message }) {
  const [text, setText] = useState(message);

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText('You clicked the button!')}>
        Change Message
      </button>
    </div>
  );
}

export default Welcome;
