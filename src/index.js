import React from 'react';
import ReactDOM from 'react-dom';


import reportWebVitals from './reportWebVitals';
//styles
import 'bootstrap/dist/css/bootstrap.css';
import './task-tracker/styles/index.css';

import App from './task-tracker/App';
// import App from './counter part/App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
