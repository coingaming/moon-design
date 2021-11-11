import React from 'react';

import Preview from '../../../components/codePreview/Preview';
import Table from '../../../components/Table';
import {
  ListItem,
  RadioButton,
  SingleSelect,
  TextInput,
} from '@heathmont/moon-core';
import { MediaHeadphones } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';
import { Chip } from '@heathmont/moon-components';

import Default from '../../../public/examples/select/singleSelect/Default';
import Label from '../../../public/examples/select/singleSelect/Label';
import Placeholders from '../../../public/examples/select/singleSelect/Placeholders';
import Secondary from '../../../public/examples/select/singleSelect/Secondary';
import Hint from '../../../public/examples/select/singleSelect/Hint';
import OptionsAsList from '../../../public/examples/select/singleSelect/OptionsAsList';
import OptionsAsList2 from '../../../public/examples/select/singleSelect/OptionsAsList2';
import OptionsAsList3 from '../../../public/examples/select/singleSelect/OptionsAsList3';
import Disabled from '../../../public/examples/select/singleSelect/Disabled';
import InputSize from '../../../public/examples/select/singleSelect/InputSize';

import useExamples from '../../../utils/useExamples';

interface Option {
  value: string;
  label: string;
  element:
    | (({ isSelected }: { isSelected: boolean }) => JSX.Element | string)
    | JSX.Element;
}

const options: Option[] = [
  {
    value: 'Option 1',
    label: 'Option 1',
    element: (
      <ListItem elementLeft={<MediaHeadphones fontSize={rem(24)} />}>
        Option 1
      </ListItem>
    ),
  },
  {
    value: 'Option 2',
    label: 'Option 2',
    element: (
      <ListItem elementLeft={<MediaHeadphones fontSize={rem(24)} />}>
        Option 2
      </ListItem>
    ),
  },
  {
    value: 'Option 3',
    label: 'Option 3',
    element: (
      <ListItem elementLeft={<MediaHeadphones fontSize={rem(24)} />}>
        Option 3
      </ListItem>
    ),
  },
  {
    value: 'Option 4',
    label: 'Option 4',
    element: (
      <ListItem elementLeft={<MediaHeadphones fontSize={rem(24)} />}>
        Option 4
      </ListItem>
    ),
  },
  {
    value: 'Option 5',
    label: 'Option 5',
    element: (
      <ListItem elementLeft={<MediaHeadphones fontSize={rem(24)} />}>
        Option 5
      </ListItem>
    ),
  },
];

const optionsWithoutLabel = [
  {
    value: 'Option 1',
    element: (
      <ListItem elementRight={<MediaHeadphones fontSize={rem(24)} />}>
        Option 1
      </ListItem>
    ),
  },
  {
    value: 'Option 2',
    element: (
      <ListItem elementRight={<MediaHeadphones fontSize={rem(24)} />}>
        Option 2
      </ListItem>
    ),
  },
  {
    value: 'Option 3',
    element: (
      <ListItem elementRight={<MediaHeadphones fontSize={rem(24)} />}>
        Option 3
      </ListItem>
    ),
  },
  {
    value: 'Option 4',
    element: (
      <ListItem elementRight={<MediaHeadphones fontSize={rem(24)} />}>
        Option 4
      </ListItem>
    ),
  },
];

const Example = () => {
  const [value, setValue] = React.useState(options[1]);

  const findElement = (element: Option, value: Option) => {
    const isFound = element.value === value.value;
    if (isFound) {
      return value;
    }
    return '';
  };

  const getOptionValue = (option: Option | undefined) => {
    return option ? option.value : '';
  };

  return (
    <SingleSelect
      options={options}
      variant="primary"
      onChange={setValue}
      controlledValue={getOptionValue(
        options.find((element) => findElement(element, value))
      )}
    />
  );
};

const TopContent = () => {
  return (
    <>
      <ListItem color="trunks.100">List item (Categories)</ListItem>
      <div className="flex flex-around px-4 gap-x-1.5">
        <Chip isActive={true}>$link</Chip>
        <Chip>$link</Chip>
        <Chip>$link</Chip>
      </div>
    </>
  );
};

export default function PageSelectSingle() {
  const examples = useExamples('SingleSelect');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">SingleSelect</h1>
        <p className="text-lg mt-4">
          SingleSelect presents a list of selecteble options and allows a user
          to select one of them.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Primary"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* with Label */}
      <section className="mt-8">
        <Preview
          title="Primary with Label"
          preview={<Label />}
          code={examples ? examples.Label : 'Loading'}
        />
      </section>

      {/*Placeholder*/}
      <section className="mt-8">
        <Preview
          title="Primary with placeholder"
          preview={<Placeholders />}
          code={examples ? examples.Placeholders : 'Loading'}
        />
      </section>

      {/* Secondary */}
      <section className="mt-8">
        <Preview
          title="Secondary with inner label and placeholder"
          preview={<Secondary />}
          code={examples ? examples.Secondary : 'Loading'}
        />
      </section>

      {/* with Hint */}
      <section className="mt-8">
        <Preview
          title="With Hint Text and error"
          preview={<Hint />}
          code={examples ? examples.Hint : 'Loading'}
        />
      </section>

      {/* Options as ListItem component */}
      <section className="mt-8">
        <Preview
          title="A selectable option as component"
          preview={<OptionsAsList />}
          code={examples ? examples.OptionsAsList : 'Loading'}
        />
      </section>

      {/* Options as ListItem component */}
      <section className="mt-8">
        <Preview
          title=""
          preview={<OptionsAsList2 />}
          code={examples ? examples.OptionsAsList2 : 'Loading'}
        />
      </section>

      {/* Options as ListItem component */}
      <section className="mt-8">
        <Preview
          title=""
          preview={<OptionsAsList3 />}
          code={examples ? examples.OptionsAsList3 : 'Loading'}
        />
      </section>

      {/* Disabled */}
      <section className="mt-8">
        <Preview
          title="Disabled"
          preview={<Disabled />}
          code={examples ? examples.Disabled : 'Loading'}
        />
      </section>

      {/* inputSize */}
      <section className="mt-8">
        <Preview
          title="Input size (small by default)"
          preview={<InputSize />}
          code={examples ? examples.InputSize : 'Loading'}
        />
      </section>

      {/* With defaultValue */}
      <section className="mt-8">
        <Preview
          title="With default value"
          preview={
            <div className="flex flex-col">
              <div className="flex justify-around items-center w-96">
                <SingleSelect
                  options={optionsWithoutLabel}
                  variant="primary"
                  defaultValue={'Option 3'}
                />
              </div>
            </div>
          }
          code={`import { SingleSelect, ListItem } from '@heathmont/moon-core';
import { MediaHeadphones } from '@heathmont/moon-icons';

const options = [
  {
    value: 'Option 1',
    label: 'Option 1',
    element: <ListItem elementRight={<MediaHeadphones fontSize={rem(24)} />}>Option 1</ListItem>,
  },
  {
    value: 'Option 2',
    label: 'Option 2',
    element: <ListItem elementRight={<MediaHeadphones fontSize={rem(24)} />}>Option 2</ListItem>,
  },
  {
    value: 'Option 3',
    label: 'Option 3',
    element: <ListItem elementRight={<MediaHeadphones fontSize={rem(24)} />}>Option 3</ListItem>,
  },
  {
    value: 'Option 4',
    label: 'Option 4',
    element: <ListItem elementRight={<MediaHeadphones fontSize={rem(24)} />}>Option 4</ListItem>,
  },
];

<SingleSelect options={options} variant='primary' defaultValue={'Option 3'}/>
          `}
        />
      </section>

      {/* SSR */}
      <section className="mt-8">
        <Preview
          title="SSR"
          preview={
            <div className="flex flex-col justify-around items-center">
              <p className="mb-4 sm:w-3/5 lg:w-3/4 text-center">
                If you need the inner content of the button on the first render
                you must control the listbox's state and keep its options'
                values and labels in data at the top of the tree, and render the
                button directly via children.
              </p>
              <div>
                <div className="flex w-96">
                  <Example />
                </div>
              </div>
            </div>
          }
          code={`import { SingleSelect, ListItem } from '@heathmont/moon-core';
import { MediaHeadphones } from '@heathmont/moon-icons';

const options = [
  {
    value: 'Option 1',
    label: 'Option 1',
    element: <ListItem elementLeft={<MediaHeadphones fontSize={rem(24)} />Option 1</ListItem>,
  },
  {
    value: 'Option 2',
    label: 'Option 2',
    element: <ListItem elementLeft={<MediaHeadphones fontSize={rem(24)} />Option 2</ListItem>,
  },
  {
    value: 'Option 3',
    label: 'Option 3',
    element: <ListItem elementLeft={<MediaHeadphones fontSize={rem(24)} />Option 3</ListItem>,
  },
  {
    value: 'Option 4',
    label: 'Option 4',
    element: <ListItem elementLeft={<MediaHeadphones fontSize={rem(24)} />Option 4</ListItem>,
  },
  {
    value: 'Option 5',
    label: 'Option 5',
    element: <ListItem elementLeft={<MediaHeadphones fontSize={rem(24)} />Option 5</ListItem>,
  },
];

const [value, setValue] = React.useState(options[1]);

<SingleSelect
  options={options}
  variant='primary'
  onChange={setValue}
  controlledValue={
    options.find((element) => element.value === value.value)?.value || ''
  }
/>
          `}
        />
      </section>

      {/* Witn Search slot*/}
      <section className="mt-8">
        <Preview
          title="Slot props"
          preview={
            <div className="flex flex-col justify-around items-center">
              <p className="mb-4 sm:w-3/5 lg:w-3/4 text-center">
                SingleSelect component provide slot prop `search` to place
                search component (or any other component) on the top of dropdown
                layout.
              </p>
              <div className="flex justify-around items-center w-96">
                <SingleSelect
                  options={optionsAsString}
                  variant="primary"
                  search={<div className="p-4">Search component</div>}
                  titleOptions={
                    <ListItem color="trunks.100">List item (title)</ListItem>
                  }
                  topContent={<TopContent />}
                />
              </div>
            </div>
          }
          code={`import { SingleSelect, ListItem } from '@heathmont/moon-core';
import { Chip } from '@heathmont/moon-components';

const options = [
  {
    value: 'Option 1',
    label: 'Option 1',
    element: <ListItem>Option 1</ListItem>,
  },
  {
    value: 'Option 2',
    label: 'Option 2',
    element: <ListItem>Option 2</ListItem>,
  },
  {
    value: 'Option 3',
    label: 'Option 3',
    element: <ListItem>Option 3</ListItem>,
  },
];

const TopContent = () => (
  <>
    <ListItem color="trunks.100">List item (Categories)</ListItem>
    <div className="flex flex-around px-4 gap-x-1.5">
      <Chip isActive={true}>$link</Chip>
      <Chip>$link</Chip>
      <Chip>$link</Chip>
    </div>
  </>
);

<SingleSelect
  options={options}
  variant='primary'
  search={<div className="p-4">Search component</div>}
  topContent={<TopContent />}
  titleOptions={
    <ListItem color="trunks.100">List item (title)</ListItem>
  }
/>
`}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for SingleSelect component</h2>
        <Table
          data={[
            {
              name: 'options',
              type: 'Option[]',
              required: true,
              default: '-',
              description: 'Option for the listbox',
            },
            {
              name: 'variant',
              type: 'primary | secondary',
              required: true,
              default: '-',
              description: 'Different variant of single select',
            },
            {
              name: 'disabled',
              type: 'boolean',
              required: false,
              default: 'false',
              description:
                'This Boolean attribute indicates that the user cannot interact with the control',
            },
            {
              name: 'inputSize',
              type: 'small | medium',
              required: false,
              default: 'small',
              description: 'Size of input',
            },
            {
              name: 'defaultValue',
              type: 'string',
              required: false,
              default: '-',
              description: 'The default value of an uncontrolled listbox',
            },
            {
              name: 'controlledValue',
              type: 'string',
              required: false,
              default: '-',
              description: 'The default value of an controlled listbox',
            },
            {
              name: 'onChange',
              type: 'func',
              required: false,
              default: '-',
              description:
                'The callback that fires when the listbox value changes.',
            },
            {
              name: 'search',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Slot for search element',
            },
            {
              name: 'topContent',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Slot for content under search element',
            },
            {
              name: 'titleOptions',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Slot for option`s title ',
            },
            {
              name: 'placeholderValue',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Placeholder element',
            },
            {
              name: 'label',
              type: 'JSX.Element | string',
              required: false,
              default: '-',
              description: 'Single select title',
            },
            {
              name: 'labelId',
              type: 'string',
              required: false,
              default: '-',
              description: 'Id for title',
            },
            {
              name: 'hintText',
              type: 'JSX.Element | string',
              required: false,
              default: '-',
              description: 'Informative message under select',
            },
            {
              name: 'isError',
              type: 'boolean',
              required: false,
              default: '-',
              description: 'Set error state for select',
            },
            {
              name: 'zIndexOptions',
              type: 'number',
              required: false,
              default: '10',
              description: 'Set custom z-index for options container',
            },
          ]}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for Option</h2>
        <Table
          data={[
            {
              name: 'value',
              type: 'string',
              required: true,
              default: '-',
              description: `The option's value. This will be passed into a hidden input field for use in forms when the option is selected.`,
            },
            {
              name: 'label',
              type: 'string',
              required: false,
              default: '-',
              description: `The option's human-readable label. `,
            },
            {
              name: 'element',
              type: 'JSX.Element | string',
              required: true,
              default: '-',
              description: 'Inner content for option',
            },
          ]}
        />
      </section>
    </>
  );
}
