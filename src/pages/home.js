// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Dash from '../components/dash';

const Home = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  if(id) return <Dash />

  return (
    <div>
      <h1>Welcome to the Auth Page</h1>
      <p>This is the homepage of your React app.</p>

      {/* Link to the Auth page */}
      <p>
        <Link to="/auth">Go to Auth Page</Link>
      </p>
    </div>
  );
};

export default Home;
