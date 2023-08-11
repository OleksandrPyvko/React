import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import StartRating from './StartRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    /> */}
    {/* <StartRating
      maxRating={10}
      size={24}
      color="red"
      className="test"
      defaultRating={2}
    /> */}
  </React.StrictMode>
);
