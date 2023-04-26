import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    role: "",
    want: "",
    reason: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(formData);
    // Send data to server or perform desired action
  };

  return (
    <div className="top">
      <h1>Innovation Station</h1>
      <h2>Please Submit Your Idea!</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        {/* <div className="anonymous">
          <label htmlFor="anonymous">Anonymous</label>
          <input type="checkbox" name="anonymous" ></input>
        </div> */}
        <div className="form-row">
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
            placeholder="i.e Developer"
          />
        </div>
        <div className="form-row">
          <label htmlFor="want">Want:</label>
          <input
            type="text"
            name="want"
            value={formData.want}
            onChange={handleInputChange}
            required
            placeholder="i.e New Laptop"
          />
        </div>
        <div className="form-row">
          <label htmlFor="reason">Reason:</label>
          <input
            type="text"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            required
            placeholder="i.e New Project"
          />
        </div>
        <div className="form-row">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message-box"
            value={formData.message}
            onChange={handleInputChange}
            required
            placeholder="i.e I need a new laptop to start the next work project as my current one is dying."
          ></textarea>
        </div>
        <div className="form-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;

