// src/NotFound.js
import React from 'react';
import {NavMenu,TitleBar} from '@shopify/app-bridge-react';
import {Card, EmptyState, Page} from '@shopify/polaris';

const Tickets = () => {
  return (
    <div>
      <TitleBar title="Tickets">
      <button variant="primary">Create ticket</button>
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
        heading="Manage your events and ticket"
        action={{content: 'Add ticket'}}
        secondaryAction={{
          content: 'Learn more',
          url: 'https://help.shopify.com',
        }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>Create and manage ticketss.</p>
      </EmptyState>
    </Card>
    </Page>
    </div>
  );
};

export default Tickets;
