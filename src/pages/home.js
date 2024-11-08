// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Dash from '../components/dash';
import ConnectForm from '../components/connectForm';

const Home = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const shop = queryParams.get('shop');

  if(shop) return <Dash />

  return (
    <div>
      <ConnectForm />
    </div>
  );
};

export default Home;
