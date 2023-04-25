import React, { useState } from "react";
import ReactDOM from 'react-dom';
import './modal.css';

const Modal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showModal, setShowModal] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation and submit data to server
    // ...

    // Close the modal
    setShowModal(false);
  };

  return (
    <div className="modal" style={{ display: showModal ? "block" : "none" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title">Login</h1>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal;

