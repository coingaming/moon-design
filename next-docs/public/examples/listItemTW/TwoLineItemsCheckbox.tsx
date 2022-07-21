import React from 'react';
import { Checkbox, ListItem } from '@heathmont/moon-core-tw';

const SubText: React.FC = () => (
  <>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>
);

const Example = () => (
  <ListItem
    className="bg-gohan"
    elementRight={<Checkbox />}
    subtext={<SubText />}
  >
    Two lines item
  </ListItem>
);

export default Example;
