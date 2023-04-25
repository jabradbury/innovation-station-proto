import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Modal from './modal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const modalRoot = ReactDOM.createRoot(document.getElementById('modal-root'));
modalRoot.render(
  <React.StrictMode>
    <Modal />
  </React.StrictMode>
)