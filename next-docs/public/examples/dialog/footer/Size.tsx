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
          isDivider={true}
        />
      </div>
      <div className="flex justify-around items-center w-96 mb-4">
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
          isDivider={true}
          size="small"
        />
      </div>
    </div>
  );
};

export default Example;
