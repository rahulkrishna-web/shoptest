// src/Home.js
import React from 'react';
import {NavMenu,TitleBar} from '@shopify/app-bridge-react';
import {Card, EmptyState, Page} from '@shopify/polaris';


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
      <a href="/tickets">Tickets</a>
      <a href="/settings">Settings</a>
      </NavMenu>
      <Page>
      <Card sectioned>
      <EmptyState
        heading="Manage your eventss"
        action={{content: 'Add event'}}
        secondaryAction={{
          content: 'Learn more',
          url: 'https://help.shopify.com',
        }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>Create and manage events.</p>
      </EmptyState>
    </Card>
    </Page>
    </div>
  );
};

export default Dash;
