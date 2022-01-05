import React from 'react';
import { Select } from '@heathmont/moon-select';
import { Footer } from '@heathmont/moon-core';
import { Button } from '@heathmont/moon-components';

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
  <div className="pb-60 flex items-end flex-wrap ">
    <div className="w-80 mr-4 ml-4 mb-8">
      <Select
        options={options}
        label="Large"
        placeholderSlot="Choose an option"
        headerSlot={<Header />}
        footerSlot={
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
        }
      />
    </div>
    <div className="w-80 mr-4 ml-4 mb-8">
      <Select
        options={options}
        label="xLarge"
        size="xLarge"
        placeholderSlot="Choose an option"
        headerSlot={<Header />}
        footerSlot={
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
        }
      />
    </div>
  </div>
);

export default Example;
