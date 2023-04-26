import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './modal.css';

const Modal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (showModal) {
      // Disable scrolling when the modal is displayed
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the modal is closed
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('users.json');
    const data = await response.json();
    const user = data.users.find((u) => u.email === email && u.password === password);
    if (user) {
      setShowModal(false);
    } else {
      alert('Please enter a valid username and password.');
    }
  };
  
  

    
  

  return (
    <div>
      <div className="modal-overlay" style={{ display: showModal ? "block" : "none" }}/>
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
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>  
  )
};

export default Modal;
