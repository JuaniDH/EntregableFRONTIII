import React, { useState } from 'react';
import Card from './Card';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    input1: '',
    input2: ''
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedData(formData);
      setError('');
    } else {
      setSubmittedData(null);
      setError('Por favor chequea que la información sea correcta.');
    }
  };

  const validateForm = () => {
    const { input1, input2 } = formData;

    if (input1.length < 3 || input1.startsWith(' ')) {
      return false;
    }

    if (input2.length < 6) {
      return false;
    }

    return true;
  };

  return (
    <div>
      <h2>Formulario de Información</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Input 1:</label>
          <input
            type="text"
            name="input1"
            value={formData.input1}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Input 2:</label>
          <input
            type="text"
            name="input2"
            value={formData.input2}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {submittedData && <Card data={submittedData} />}
    </div>
  );
};

export default FormComponent;