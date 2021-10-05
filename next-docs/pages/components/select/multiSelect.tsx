import React from 'react';

import { MultiSelect } from '@heathmont/moon-core';
import { ListItem, Footer, Checkbox } from '@heathmont/moon-core';
import { Button } from '@heathmont/moon-components';

import Table from '../../../components/Table';
import Preview from '../../../components/codePreview/Preview';
import CodeSnippet from '../../../components/CodeSnippet';

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

const code = `import { MultiSelect, ListItem, Footer, Checkbox } from '@heathmont/moon-core';
import { Button } from '@heathmont/moon-components';

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


<MultiSelect
  onChange={console.log}
  isExpanded={true}
  items={options}
  label={<span>Choose some elements:</span>}
  search={<div className="p-4">Search component</div>}
  footer={
    <Footer
      primButton={
        <Button fullWidth variant="primary" size="small">
          Button
        </Button>
      }
      secButton={
        <Button fullWidth variant="tertiary" size="small">
          Button
        </Button>
      }
      tertButton={
        <Button fullWidth variant="secondary" size="small">
          Button
        </Button>
      }
      isDivider
      size="small"
    />
  }
  initialSelectedItems={['Option 1']}
/>
`;

const Example = () => {
  return (
    <MultiSelect
      onChange={console.log}
      isExpanded={true}
      items={options}
      label={<span>Choose some elements:</span>}
      search={<div className="p-4">Search component</div>}
      footer={
        <Footer
          primButton={
            <Button variant="primary" size="xsmall">
              Button
            </Button>
          }
          secButton={
            <Button variant="tertiary" size="xsmall">
              Button
            </Button>
          }
          tertButton={
            <Button variant="secondary" size="xsmall">
              Button
            </Button>
          }
          isDivider
          size="small"
        />
      }
      initialSelectedItems={['Option 1']}
    />
  );
};

export default function PageMultiSelect() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">MultiSelect</h1>

        <p className="text-lg mt-4">
          Unlike a normal select, multiselect allows the user to select multiple
          options at once.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Examples"
          preview={
            <div className="h-96 w-72">
              <Example />
            </div>
          }
          code={code}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props</h2>
        <Table
          data={[
            {
              name: 'items',
              type: 'Option[]',
              required: true,
              default: '-',
              description: `The option's value.`,
            },
            {
              name: 'label',
              type: 'string | React.ReactNode;',
              required: true,
              default: '-',
              description: `Label title`,
            },
            {
              name: 'search',
              type: 'React.ReactNode',
              required: false,
              default: '-',
              description: 'Search element slot.',
            },
            {
              name: 'footer',
              type: 'React.ReactNode',
              required: false,
              default: '-',
              description: 'Footer element slot.',
            },
            {
              name: 'initialSelectedItems',
              type: 'Option[]',
              required: false,
              default: '[]',
              description: 'Initially selected items',
            },
            {
              name: 'isExpanded',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'is expanded',
            },
            {
              name: 'onChange',
              type: '(selectedItems: string[]) => any;',
              required: false,
              default: '-',
              description: 'onChange callback',
            },
          ]}
        />
      </section>

      <section className="mt-8">
        <CodeSnippet>
          {`Option {
value: string;
label?: string;
element: ({
  isSelected: boolean,
}) => JSX.Element | string;
}
`}
        </CodeSnippet>
      </section>
    </>
  );
}
