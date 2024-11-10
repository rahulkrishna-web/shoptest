// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import Dash from '../components/dash';
import ConnectForm from '../components/connectForm';

const Home = () => {
  const [searchParams] = useSearchParams();
  const shop = searchParams.get('shop');
  if(shop) return <Dash />

  return (
    <div>
      <ConnectForm />
    </div>
  );
};

export default Home;
