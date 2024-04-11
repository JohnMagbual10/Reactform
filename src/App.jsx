import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenticate';

const handleSubmit= (e) => {
  event.preventDefault();
}

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  return (
    <div className="App">
      <SignUpForm />
      <Authenticate />
    </div>
  );
}

export default App;
