import React from 'react';
import { ListItem } from '@heathmont/moon-core-tw';

const SubText: React.FC = () => (
  <>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>
);

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <ListItem size="large" className="bg-gohan" subtext={<SubText />}>
      Large
    </ListItem>
    <ListItem className="bg-gohan" subtext={<SubText />}>
      Medium
    </ListItem>
  </div>
);

export default Example;
