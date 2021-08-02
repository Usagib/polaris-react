import React from 'react';

import {
  Button,
  Card,
  Link,
  Page,
  Stack,
  ThemeProvider,
  Thumbnail,
} from '../src';

export function Playground() {
  return (
    <Page title="Playground">
      <ThemeProvider
        theme={{
          colorScheme: 'dark',
          colors: {
            surface: '#020c1d',
            secondary: '#103560',
            interactive: '#009973',
          },
        }}
      >
        <Card title="Order details">
          <Card.Section title="unfulfilled">
            <Stack alignment="center">
              <Thumbnail
                alt=""
                source="https://burst.shopifycdn.com/photos/lightning-hard-enamel-lapel-pin.jpg"
              />
              <Stack.Item fill>
                <p>
                  <Link removeUnderline>Enamel pin</Link>
                </p>
              </Stack.Item>
              <Stack.Item>
                <p>$9.99</p>
              </Stack.Item>
            </Stack>
          </Card.Section>
          <Card.Section>
            <Stack alignment="center">
              <Stack.Item fill>Buy postage and ship 2 items</Stack.Item>
              <Stack.Item>
                <Button outline>Continue</Button>
              </Stack.Item>
            </Stack>
          </Card.Section>
        </Card>
      </ThemeProvider>
    </Page>
  );
}
