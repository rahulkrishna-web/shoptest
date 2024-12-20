// src/NotFound.js
import { BlockStack, Box, Card, Divider, InlineGrid, Page, Text, TextField } from '@shopify/polaris';
import React from 'react';

const Settings = () => {
  return (
    <div>
     <Page
        divider
        primaryAction={{ content: "View on your store", disabled: true }}
        secondaryActions={[
          {
            content: "Duplicate",
            accessibilityLabel: "Secondary action label",
            onAction: () => alert("Duplicate action"),
          },
        ]}
      >
        <BlockStack gap={{ xs: "800", sm: "400" }}>
          <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
            <Box
              as="section"
              paddingInlineStart={{ xs: 400, sm: 0 }}
              paddingInlineEnd={{ xs: 400, sm: 0 }}
            >
              <BlockStack gap="400">
                <Text as="h3" variant="headingMd">
                  InterJambs
                </Text>
                <Text as="p" variant="bodyMd">
                  Interjambs are the rounded protruding bits of your puzzlie
                  piece
                </Text>
              </BlockStack>
            </Box>
            <Card roundedAbove="sm">
              <BlockStack gap="400">
                <TextField label="Interjamb style" />
                <TextField label="Interjamb ratio" />
              </BlockStack>
            </Card>
          </InlineGrid>
          <Divider />
          <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
            <Box
              as="section"
              paddingInlineStart={{ xs: 400, sm: 0 }}
              paddingInlineEnd={{ xs: 400, sm: 0 }}
            >
              <BlockStack gap="400">
                <Text as="h3" variant="headingMd">
                  Dimensions
                </Text>
                <Text as="p" variant="bodyMd">
                  Interjambs are the rounded protruding bits of your puzzlie
                  piece
                </Text>
              </BlockStack>
            </Box>
            <Card roundedAbove="sm">
              <BlockStack gap="400">
                <TextField label="Horizontal" />
                <TextField label="Interjamb ratio" />
              </BlockStack>
            </Card>
          </InlineGrid>
        </BlockStack>
      </Page>
    </div>
  );
};

export default Settings;
