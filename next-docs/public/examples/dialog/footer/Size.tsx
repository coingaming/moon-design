import React from 'react';
import { Footer, Button } from '@heathmont/moon-core';

const Example = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around items-center w-96 mb-4">
        <Footer
          primButton={<Button fullWidth>Button</Button>}
          secButton={
            <Button fullWidth variant="secondary">
              Button
            </Button>
          }
          tertButton={
            <Button fullWidth variant="tertiary">
              Button
            </Button>
          }
          isDivider={true}
        />
      </div>
      <div className="flex justify-around items-center w-96 mb-4">
        <Footer
          primButton={
            <Button fullWidth size="small">
              Button
            </Button>
          }
          secButton={
            <Button fullWidth variant="secondary" size="small">
              Button
            </Button>
          }
          tertButton={
            <Button fullWidth variant="tertiary" size="small">
              Button
            </Button>
          }
          isDivider={true}
          size="small"
        />
      </div>
    </div>
  );
};

export default Example;
