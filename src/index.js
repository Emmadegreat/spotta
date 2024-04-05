import './static/css/index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
  <React.StrictMode>

  </React.StrictMode>
);*/

//const root = document.getElementById('root');
//const rootAPI = ReactDOM.createRoot(root);
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);


