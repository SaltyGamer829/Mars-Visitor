import React, { useState } from 'react';
import FormStage1 from './components/FormStage1';
import FormStage2 from './components/FormStage2';
import FormStage3 from './components/FormStage3';
import NavigationButtons from './components/NavigationButtons';
import './styles/App.css';

function App() {
  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    email: '',
    phone: '',
    departureDate: '',
    returnDate: '',
    accommodation: '',
    specialRequests: '',
    healthDeclaration: '',
    emergencyContact: '',
    medicalConditions: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStage = () => {
    if (stage < 3) setStage(stage + 1);
  };

  const previousStage = () => {
    if (stage > 1) setStage(stage - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    alert('Application submitted successfully!');
  };

  return (
    <div className="App">
      <h1>Mars Visit Application</h1>
      <form onSubmit={handleSubmit}>
        {stage === 1 && <FormStage1 formData={formData} handleInputChange={handleInputChange} />}
        {stage === 2 && <FormStage2 formData={formData} handleInputChange={handleInputChange} />}
        {stage === 3 && <FormStage3 formData={formData} handleInputChange={handleInputChange} />}
        <NavigationButtons stage={stage} nextStage={nextStage} previousStage={previousStage} />
      </form>
    </div>
  );
}

export default App;
