// src/Home.js
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Page, TextField, BlockStack, InlineStack, Text } from '@shopify/polaris';

const ConnectForm = () => {
  const [storeUrl, setStoreUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleStoreUrlChange = useCallback(
    (newValue) => setStoreUrl(newValue),
    [],
  );

  const connectStore = async () => {
    if (!storeUrl) {
      return console.log("No store URL entered.");
    }

    setLoading(true);
    setError(null);

    const apiKey = process.env.SHOPIFY_API_KEY;
    const redirectUri = process.env.REDIRECT_URI;
    const scopes = process.env.SHOPIFY_SCOPES;
    const state = Math.random().toString(36).substring(2);

    try {
      const data = { shop_url: storeUrl, state };

      const response = await fetch('https://eventsguy.clyrix.com/api/store-shop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.status === 'created' || result.status === 'exists') {
        const authUrl = `https://${storeUrl}/admin/oauth/authorize?client_id=${apiKey}&scope=${scopes}&redirect_uri=${redirectUri}&state=${state}`;
        window.location.href = authUrl;
      } else {
        console.log("Unexpected status: ", result.status);
      }
    } catch (error) {
      console.error("Error during request:", error);
      setError('Failed to connect the store. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Page>
      <Card sectioned>
            <BlockStack gap="200">
              <Text variant="headingXl" as="h1">
                Connect your store
              </Text>
              <BlockStack gap="400">
                <TextField
                  label="Store name"
                  placeholder="Enter Store URL"
                  value={storeUrl}
                  onChange={handleStoreUrlChange}
                />
              </BlockStack>
              <InlineStack align="end">
              <Button
                  primary
                  onClick={connectStore}
                  disabled={loading}
                >
                  {loading ? 'Connecting...' : 'Connect'}
                </Button>
                </InlineStack>
              </BlockStack>
          </Card>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      
    </Page>
    </>
  );
};

export default ConnectForm;
