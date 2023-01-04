import React from 'react';
import {
  ListItem,
  Footer,
  Checkbox,
  Button,
  MultiSelect,
} from '@heathmont/moon-core';

const SubText: React.FC = () => (
  <>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>
);

const options = [
  {
    value: 'Option 1',
    label: 'Option 1',
    element: ({ isSelected }: { isSelected: boolean }) => (
      <ListItem
        elementRight={
          <Checkbox checked={isSelected} onChange={() => console.log('test')} />
        }
        subtext={<SubText />}
      >
        Option 1
      </ListItem>
    ),
  },
  {
    value: 'Option 2',
    label: 'Option 2',
    element: ({ isSelected }: { isSelected: boolean }) => (
      <ListItem
        elementRight={
          <Checkbox checked={isSelected} onChange={() => console.log('test')} />
        }
        subtext={<SubText />}
      >
        Option 2
      </ListItem>
    ),
  },
  {
    value: 'Option 3',
    label: 'Option 3',
    element: ({ isSelected }: { isSelected: boolean }) => (
      <ListItem
        elementRight={
          <Checkbox checked={isSelected} onChange={() => console.log('test')} />
        }
        subtext={<SubText />}
      >
        Option 3
      </ListItem>
    ),
  },
];

const Example = () => (
  <div className="h-96 w-72">
    <MultiSelect
      onChange={console.log}
      isExpanded={true}
      items={options}
      label={<span>Choose some elements:</span>}
      search={<div className="p-4">Search component</div>}
      hintText="Informative message holder"
      error={true}
      footer={
        <Footer
          primButton={<Button size="small">Button</Button>}
          secButton={
            <Button variant="secondary" size="small">
              Button
            </Button>
          }
          tertButton={
            <Button variant="tertiary" size="small">
              Button
            </Button>
          }
          isDivider
          size="small"
        />
      }
      initialSelectedItems={['Option 1']}
    />
  </div>
);

export default Example;
