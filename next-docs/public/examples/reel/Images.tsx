import React from 'react';
import { Reel } from '@heathmont/moon-components';

const items = Array.from({ length: 10 }, (v, i) => i);

const Example = () => {
  return (
    <>
      <Reel height="10vh">
        {items.map((item) => (
          <img key={item} alt={`Test ${item}`} src="" />
        ))}
      </Reel>
    </>
  );
};

export default Example;
