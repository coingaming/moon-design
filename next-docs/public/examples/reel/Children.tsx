import React from 'react';
import { Reel } from '@heathmont/moon-components';

const items = Array.from({ length: 10 }, (v, i) => i);

const Example = () => {
  return (
    <>
      <Reel as="ul">
        {items.map((item) => (
          <li key={item}>Item {item}</li>
        ))}
      </Reel>
    </>
  );
};

export default Example;
