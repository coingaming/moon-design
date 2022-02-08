import React from 'react';
import { Reel } from '@heathmont/moon-components';

const items = Array.from({ length: 10 }, (v, i) => i);

const Example = () => {
  return (
    <>
      <Reel>
        {items.map((item) => (
          <div key={item}>Item {item}</div>
        ))}
      </Reel>
    </>
  );
};

export default Example;
