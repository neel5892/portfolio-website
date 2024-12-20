// Form.js
import React from 'react';

const Form = ({ formData, onChange }) => {
  return (
    <div className="form">
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={onChange} placeholder="Enter Name" />
      <label>Job Title:</label>
      <input type="text" name="jobTitle" value={formData.jobTitle} onChange={onChange} placeholder="Enter Job Title" />
      <label>Phone:</label>
      <input type="text" name="phone" value={formData.phone} onChange={onChange} placeholder="Enter Phone Number" />
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={onChange} placeholder="Enter Email" />
    </div>
  );
}

export default Form;