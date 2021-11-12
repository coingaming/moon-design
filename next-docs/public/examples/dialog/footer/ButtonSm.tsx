import React from 'react';

import { Footer } from '@heathmont/moon-core';
import { Button } from '@heathmont/moon-components';

const Example = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around items-center w-96 mb-4">
        <Footer
          primButton={
            <Button fullWidth variant="primary" size="small">
              Button
            </Button>
          }
        />
      </div>
      <div className="flex justify-around items-center w-96 mb-4">
        <Footer
          primButton={
            <Button fullWidth variant="primary" size="small">
              Button
            </Button>
          }
          secButton={
            <Button fullWidth variant="tertiary" size="small">
              Button
            </Button>
          }
        />
      </div>
      <div className="flex justify-around items-center w-96 mb-4">
        <Footer
          primButton={
            <Button fullWidth variant="primary" size="small">
              Button
            </Button>
          }
          secButton={
            <Button fullWidth variant="tertiary" size="small">
              Button
            </Button>
          }
          tertButton={
            <Button fullWidth variant="secondary" size="small">
              Button
            </Button>
          }
        />
      </div>
      <div className="flex justify-around items-center w-96 mb-4">
        <Footer
          primButton={
            <Button fullWidth variant="primary" size="small">
              Button
            </Button>
          }
          tertButton={
            <Button fullWidth variant="secondary" size="small">
              Button
            </Button>
          }
        />
      </div>
      <div className="flex justify-around items-center w-96 mb-4">
        <Footer
          secButton={
            <Button fullWidth variant="tertiary" size="small">
              Button
            </Button>
          }
        />
      </div>
      <div className="flex justify-around items-center w-96 mb-4">
        <Footer
          secButton={
            <Button fullWidth variant="tertiary" size="small">
              Button
            </Button>
          }
          tertButton={
            <Button fullWidth variant="secondary" size="small">
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
