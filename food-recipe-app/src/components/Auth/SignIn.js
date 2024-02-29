// SignIn.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext'; // Update the path accordingly
import AuthService from './AuthService'; // Update the path accordingly

const SignIn = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      const userData = await AuthService.signIn(email, password);
      signIn(userData);
    } catch (error) {
      setError('Invalid email or password. Please try again.');
      console.error('Sign-in failed:', error.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error-message">{error}</p>}

        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;

