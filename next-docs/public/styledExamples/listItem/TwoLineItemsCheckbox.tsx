import React from 'react';
import { Checkbox, ListItem } from '@heathmont/moon-core';

const SubText: React.FC = () => (
  <>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>
);

const Example = () => (
  <ListItem
    backgroundColor="gohan.100"
    elementRight={<Checkbox />}
    subtext={<SubText />}
  >
    Two lines item
  </ListItem>
);

export default Example;
