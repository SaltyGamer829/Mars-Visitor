import React from 'react';

function FormStage1({ formData, handleInputChange }) {
  return (
    <div>
      <h2>Stage 1: Personal Information</h2>
      <label>Full Name: <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required /></label>
      <label>Date of Birth: <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required /></label>
      <label>Nationality: <input type="text" name="nationality" value={formData.nationality} onChange={handleInputChange} required /></label>
      <label>Email: <input type="email" name="email" value={formData.email} onChange={handleInputChange} required /></label>
      <label>Phone: <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required /></label>
    </div>
  );
}

export default FormStage1;