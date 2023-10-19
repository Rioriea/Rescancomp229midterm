import React, { useState } from 'react';
import './controlled.css';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState(''); // Fixed typo in setEmail
  const [mobileNumber, setMobileNumber] = useState('');
  const [checkboxValues, setCheckboxValues] = useState([]); // Use an array for checkboxes

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setCheckboxValues([...checkboxValues, value]);
    } else {
      setCheckboxValues(checkboxValues.filter((val) => val !== value));
    }
  };

  const handleSubmit = () => {
    const message = `
      First name: ${firstName}
      Last name: ${lastName}
      Email: ${email}
      Mobile number: ${mobileNumber}
      Checkbox values: ${checkboxValues.join(', ')}
    `;
    alert(message);
  };

  return (
    <div className="registration-form">
      <h1>Employee Registration Form</h1>
      <form>
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <br></br>
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <br></br>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <br></br>
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={handleMobileNumberChange}
        />
        <br></br>
        <div>
          <label>
            <input
              type="checkbox"
              value="Highschool(10th)"
              checked={checkboxValues.includes('Highschool(10th)')}
              onChange={handleCheckboxChange}
            />
            Highschool
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              value="Higherschool(12th)"
              checked={checkboxValues.includes('Higherschool(12th)')}
              onChange={handleCheckboxChange}
            />
            Higherschool
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              value="graduation"
              checked={checkboxValues.includes('graduation')}
              onChange={handleCheckboxChange}
            />
            Graduation Bachelors
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              value="postgraduation"
              checked={checkboxValues.includes('postgraduation')}
              onChange={handleCheckboxChange}
            />
            Post Graduation Masters
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              value="other"
              checked={checkboxValues.includes('other')}
              onChange={handleCheckboxChange}
            />
            Other
          </label>
        </div>
        <br></br>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;