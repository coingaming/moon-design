import React, { useCallback, useEffect, useState } from 'react';
import { Popover } from '@heathmont/moon-popover';
import { Footer, Heading, Text, Button } from '@heathmont/moon-core';

const Example = () => {
  const [open, setOpen] = useState(false);

  const HandlerOpen = useCallback(
    (e: any) => {
      e.preventDefault();
      setOpen(false);
    },
    [open]
  );

  return (
    <Popover
      padding={0}
      placement="bottom"
      isOpen={open}
      onVisibilityChange={(status) => {
        setOpen(status);
        console.log('status: ', status);
      }}
      content={
        <div>
          <div className="p-8 space-y-4">
            <Heading size={20}>Agents</Heading>
            <Text size={14}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
          </div>

          <Footer
            primButton={
              <Button fullWidth size="small" onClick={HandlerOpen}>
                OK
              </Button>
            }
            secButton={
              <Button
                fullWidth
                variant="secondary"
                size="small"
                onClick={HandlerOpen}
              >
                Cansel
              </Button>
            }
            tertButton={
              <Button
                fullWidth
                variant="tertiary"
                size="small"
                onClick={HandlerOpen}
              >
                Decline
              </Button>
            }
            isDivider
            size="small"
          />
        </div>
      }
    >
      <Button>Toggle Popover</Button>
    </Popover>
  );
};

export default Example;
