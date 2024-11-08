// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the homepage of your React app.</p>

      {/* Link to the Auth page */}
      <p>
        <Link to="/">Go to Home Page</Link>
      </p>
    </div>
  );
};

export default Auth;
