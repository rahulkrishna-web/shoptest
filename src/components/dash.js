// src/Home.js
import React from 'react';
import {NavMenu} from '@shopify/app-bridge-react';


const Dash = () => {
  return (
    <div>
      <NavMenu>
      <a href="/" rel="home">
        Home
      </a>
      <a href="/events">Events</a>
      <a href="/settings">Settings</a>
        </NavMenu>
    </div>
  );
};

export default Dash;
