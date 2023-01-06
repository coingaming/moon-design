import React from 'react';
import { Footer, Button } from '@heathmont/moon-core';

const Example = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around items-center w-96 mb-4">
        <Footer primButton={<Button fullWidth>Button</Button>} />
      </div>
      <div className="flex justify-around items-center w-96 mb-4">
        <Footer
          primButton={<Button fullWidth>Button</Button>}
          secButton={
            <Button fullWidth variant="secondary">
              Button
            </Button>
          }
        />
      </div>
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
        />
      </div>
      <div className="flex justify-around items-center w-96 mb-4">
        <Footer
          primButton={<Button fullWidth>Button</Button>}
          tertButton={
            <Button fullWidth variant="tertiary">
              Button
            </Button>
          }
        />
      </div>
      <div className="flex justify-around items-center w-96 mb-4">
        <Footer
          secButton={
            <Button fullWidth variant="secondary">
              Button
            </Button>
          }
        />
      </div>
      <div className="flex justify-around items-center w-96 mb-4">
        <Footer
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
        />
      </div>
      <div className="flex justify-around items-center w-full max-w-screen-sm mb-4"></div>
    </div>
  );
};

export default Example;
