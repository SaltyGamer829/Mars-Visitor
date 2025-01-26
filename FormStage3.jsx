import React from 'react';

function FormStage3({ formData, handleInputChange }) {
  return (
    <div>
      <h2>Stage 3: Health and Safety</h2>
      <label>Health Declaration (Yes/No): 
        <select name="healthDeclaration" value={formData.healthDeclaration} onChange={handleInputChange} required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>
      <label>Emergency Contact: <input type="text" name="emergencyContact" value={formData.emergencyContact} onChange={handleInputChange} required /></label>
      <label>Medical Conditions (if any): <textarea name="medicalConditions" value={formData.medicalConditions} onChange={handleInputChange} /></label>
    </div>
  );
}

export default FormStage3;