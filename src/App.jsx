import React, { useState } from 'react';
import './App.css';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value) => {
    const isValid = /\S+@\S+\.\S+/.test(value);
    setEmailError(isValid ? '' : 'Invalid email address');
  };

  const isFormValid = email && password && !emailError;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert('Form submitted!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          validateEmail(e.target.value);
        }}
      />
      {emailError && <p className="error">{emailError}</p>}

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
}

export default Form;
