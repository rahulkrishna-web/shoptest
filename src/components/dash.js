// src/Home.js
import React from 'react';
import {NavMenu} from '@shopify/app-bridge-react';


const Dash = () => {
  return (
    <div>
    <TitleBar title="Events">
      <button variant="primary">Create event</button>
    </TitleBar>
      <NavMenu>
      <a href="/" rel="home">
        Home
      </a>
      <a href="/events">Events</a>
      <a href="/tickets">Tickets</a>
      <a href="/settings">Settings</a>
        </NavMenu>
    </div>
  );
};

export default Dash;
