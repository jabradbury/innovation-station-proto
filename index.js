import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './form';
import Modal from './modal';
import Navbar from './navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Form />
  </React.StrictMode>
);

const modalRoot = ReactDOM.createRoot(document.getElementById('modal-root'));
modalRoot.render(
  <React.StrictMode>
    <Modal />
  </React.StrictMode>
)
