import React from 'react';

import { Popover } from '@heathmont/moon-popover/lib';
import { Footer, Heading, Text } from '@heathmont/moon-core';
import { Button } from '@heathmont/moon-components';

const Example = () => (
  <Popover
    padding={0}
    placement="bottom"
    isOpen={false}
    onVisibilityChange={(status) => console.log('status: ', status)}
    content={
      <div>
        <div className="p-8 space-y-4">
          <Heading size={20}>Agents</Heading>
          <Text size={14}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Ex
          </Text>
        </div>

        <Footer
          primButton={
            <Button fullWidth variant="primary" size="xsmall">
              Button
            </Button>
          }
          secButton={
            <Button fullWidth variant="tertiary" size="xsmall">
              Button
            </Button>
          }
          tertButton={
            <Button fullWidth variant="secondary" size="xsmall">
              Button
            </Button>
          }
          isDivider
          size="small"
        />
      </div>
    }
  >
    <Button variant="primary">Toggle Popover</Button>
  </Popover>
);

export default Example;
