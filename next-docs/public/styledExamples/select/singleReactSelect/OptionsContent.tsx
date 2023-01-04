import React from 'react';
import { Select } from '@heathmont/moon-select';
import { Footer, Button } from '@heathmont/moon-core';

const options = [
  {
    value: 'Option 1',
    label: 'Option 1',
  },
  {
    value: 'Option 2',
    label: 'Option 2',
  },
  {
    value: 'Option 3',
    label: 'Option 3',
  },
];

const Header = () => <div className="p-3 border-b">Header</div>;
const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <Select
      options={options}
      label="Large"
      placeholderSlot="Choose an option"
      headerSlot={<Header />}
      footerSlot={
        <Footer
          primButton={
            <Button fullWidth size="small">
              Button
            </Button>
          }
          secButton={
            <Button fullWidth variant="secondary" size="small">
              Button
            </Button>
          }
          tertButton={
            <Button fullWidth variant="tertiary" size="small">
              Button
            </Button>
          }
          isDivider={true}
          size="small"
        />
      }
    />
    <Select
      options={options}
      label="xLarge"
      size="xLarge"
      placeholderSlot="Choose an option"
      headerSlot={<Header />}
      footerSlot={
        <Footer
          primButton={
            <Button fullWidth size="small">
              Button
            </Button>
          }
          secButton={
            <Button fullWidth variant="secondary" size="small">
              Button
            </Button>
          }
          tertButton={
            <Button fullWidth variant="tertiary" size="small">
              Button
            </Button>
          }
          isDivider={true}
          size="small"
        />
      }
    />
  </div>
);

export default Example;
