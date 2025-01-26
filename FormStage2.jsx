import React from 'react';

function FormStage2({ formData, handleInputChange }) {
  return (
    <div>
      <h2>Stage 2: Travel Preferences</h2>
      <label>Departure Date: <input type="date" name="departureDate" value={formData.departureDate} onChange={handleInputChange} required /></label>
      <label>Return Date: <input type="date" name="returnDate" value={formData.returnDate} onChange={handleInputChange} required /></label>
      <label>Accommodation Preference: 
        <select name="accommodation" value={formData.accommodation} onChange={handleInputChange} required>
          <option value="">Select</option>
          <option value="Space Hotel">Space Hotel</option>
          <option value="Martian Base">Martian Base</option>
        </select>
      </label>
      <label>Special Requests: <textarea name="specialRequests" value={formData.specialRequests} onChange={handleInputChange} /></label>
    </div>
  );
}

export default FormStage2;