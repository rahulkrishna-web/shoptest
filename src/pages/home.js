// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Dash from '../components/dash';
import ConnectForm from '../components/connectForm';

const Home = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  if(id) return <Dash />

  return (
    <div>
      <ConnectForm />
    </div>
  );
};

export default Home;
