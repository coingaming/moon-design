import React from 'react';

import { MultiSelect } from '@heathmont/moon-select';
import { ListItem, Footer, Checkbox } from '@heathmont/moon-core';
import { Button } from '@heathmont/moon-components';

const SubText: React.FC = () => (
  <>Lorem Ipsum is simply dummy text of the printing and typesetting industry</>
);

const options = [
  {
    value: 'Option 1',
    label: 'Option 1',
    element: ({ isSelected }: any) => (
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
    element: ({ isSelected }: any) => (
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
];

export default function PageMultiSelect() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">MultiSelect</h1>
        <p className="text-lg mt-4">
          By default, Select stretches to full width on small devices.
        </p>
        <p className="text-lg mt-4">
          For Select inputs that need to remain full width on all devices, use
          the fullWidth prop.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <MultiSelect
          isExpanded={true}
          items={options}
          label={<span>Choose some elements:</span>}
          search={<div className="p-4">Search component</div>}
          footer={
            <Footer
              primButton={
                <Button fullWidth variant="secondary" size="xsmall">
                  Button
                </Button>
              }
              secButton={
                <Button fullWidth variant="tertiary" size="xsmall">
                  Button
                </Button>
              }
              tertButton={
                <Button fullWidth variant="tertiary" size="xsmall">
                  Button
                </Button>
              }
              isDivider
              size="small"
            />
          }
          initialSelectedItems={[]}
        />
      </section>
    </>
  );
}
