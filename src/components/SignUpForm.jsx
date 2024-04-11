import React, { useState } from 'react';

export default function SignUpForm({ setToken }) {
  // Step 6: Create state variables for form inputs and error
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Step 7: Form logic and JSX
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Step 13: Make a POST request to the API
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      // Step 14: Parse the response and log the result
      const result = await response.json();
      console.log(result);

      // Assuming the API response contains a token
      // You may want to store this token in state or context for further use
      // Example: setToken(result.token);
      setToken(result.token); // Set the token in state
    } catch (error) {
      // Step 11: Handle errors and update state
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {/* Step 12: Conditionally render error message */}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        {/* Step 8: Control inputs and add onChange event handlers */}
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        {/* Step 10: Pass handleSubmit to onSubmit event of form */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
