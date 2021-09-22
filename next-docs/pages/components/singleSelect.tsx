import React from 'react';

import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';
import {
  SingleSelect,
  ListItem,
  RadioButtonLabel,
  RadioButtonInput,
} from '@heathmont/moon-core';
import { MediaHeadphones } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';

const optionsAsString = [
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

const options = [
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

const options2 = [
  {
    value: 'Option 1',
    label: 'Option 1',
    element: (
      <ListItem
        isMeta
        elementRight={<>Meta</>}
        subtext={
          <>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </>
        }
      >
        Option 1
      </ListItem>
    ),
  },
  {
    value: 'Option 2',
    label: 'Option 2',
    element: (
      <ListItem
        isMeta
        elementRight={<>Meta</>}
        subtext={
          <>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </>
        }
      >
        Option 2
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

const optionsRadioBtn = [
  {
    value: 'Option 1',
    label: 'Option 1',
    element: (
      <RadioButtonLabel id="Option1">
        <ListItem
          elementRight={
            <RadioButtonInput
              name="options"
              ariaLabel="Option 1"
              id="Option1"
            />
          }
        >
          Option 1
        </ListItem>
      </RadioButtonLabel>
    ),
  },
  {
    value: 'Option 2',
    label: 'Option 2',
    element: (
      <RadioButtonLabel id="Option2">
        <ListItem
          elementRight={
            <RadioButtonInput
              name="options"
              ariaLabel="Option 2"
              id="Option2"
            />
          }
        >
          Option 2
        </ListItem>
      </RadioButtonLabel>
    ),
  },
];

const Example = () => {
  const [value, setValue] = React.useState(options[1]);

  return (
    <SingleSelect
      options={options}
      onChange={setValue}
      controlledValue={
        options.find((element) => element.value === value.value)?.value || ''
      }
    />
  );
};

export default function PageSelectSingle() {
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
          title="Default"
          preview={
            <div className="flex flex-col">
              <div className="flex justify-around items-center w-96">
                <SingleSelect options={optionsAsString} />
              </div>
            </div>
          }
          code={`import { SingleSelect, ListItem } from '@heathmont/moon-core';

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

<SingleSelect options={options} />
`}
        />
      </section>

      {/* Options as ListItem component */}
      <section className="mt-8">
        <Preview
          title="A selectable option as component"
          preview={
            <div className="flex flex-col">
              <div className="flex justify-around items-center w-96 mb-4">
                <SingleSelect options={options} />
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

<SingleSelect options={options} />
          `}
        />
      </section>

      {/* Options as ListItem component */}
      <section className="mt-8">
        <Preview
          title=""
          preview={
            <div className="flex flex-col">
              <div className="flex justify-around items-center w-96 ">
                <SingleSelect options={options2} />
              </div>
            </div>
          }
          code={`import { SingleSelect, ListItem } from '@heathmont/moon-core';

const options = [
  {
    value: 'Option 1',
    label: 'Option 1',
    element: (
      <ListItem 
        isMeta 
        elementRight={<>Meta</>}
        subtext={<>Lorem Ipsum is simply dummy text of the printing and typesettingindustry</>}
      >
        Option 1
      </ListItem>
    ),
  },
  {
    value: 'Option 2',
    label: 'Option 2',
    element: (
      <ListItem 
        isMeta 
        elementRight={<>Meta</>}
        subtext={<>Lorem Ipsum is simply dummy text of the printing and typesettingindustry</>}
      >
        Option 2
      </ListItem>
    ),
  },
]; 

<SingleSelect options={options} />
          `}
        />
      </section>

      {/* Options as ListItem component */}
      <section className="mt-8">
        <Preview
          title=""
          preview={
            <div className="flex flex-col">
              <div className="flex justify-around items-center w-96">
                <SingleSelect options={optionsRadioBtn} />
              </div>
            </div>
          }
          code={`import { SingleSelect, ListItem, RadioButtonLabel, RadioButtonInput, } from '@heathmont/moon-core';

const options = [
  {
    value: 'Option 1',
    label: 'Option 1',
    element: (
      <RadioButtonLabel id="Option1">
        <ListItem
          elementRight={
            <RadioButtonInput
              name="options"
              ariaLabel="Option 1"
              id="Option1"
            />
          }
        >
          Option 1
        </ListItem>
      </RadioButtonLabel>
    ),
  },
  {
    value: 'Option 2',
    label: 'Option 2',
    element: (
      <RadioButtonLabel id="Option2">
        <ListItem
          elementRight={
            <RadioButtonInput
              name="options"
              ariaLabel="Option 2"
              id="Option2"
            />
          }
        >
          Option 2
        </ListItem>
      </RadioButtonLabel>
    ),
  },
];

<SingleSelect options={options} />
`}
        />
      </section>
      {/* Disabled */}
      <section className="mt-8">
        <Preview
          title="Disabled"
          preview={
            <div className="flex flex-col">
              <div className="flex justify-around items-center w-96">
                <SingleSelect options={optionsAsString} disabled />
              </div>
            </div>
          }
          code={`import { SingleSelect, ListItem } from '@heathmont/moon-core';

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

<SingleSelect options={options} disabled/>
          `}
        />
      </section>

      {/* inputSize */}
      <section className="mt-8">
        <Preview
          title="Input size (small by default)"
          preview={
            <div className="flex flex-col">
              <div className="flex justify-around items-center w-96 mb-4">
                <SingleSelect options={optionsAsString} inputSize="small" />
              </div>
              <div className="flex justify-around items-center w-96">
                <SingleSelect options={optionsAsString} inputSize="medium" />
              </div>
            </div>
          }
          code={`import { SingleSelect, ListItem } from '@heathmont/moon-core';

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

<SingleSelect options={options} inputSize="small"/>

<SingleSelect options={options} inputSize="medium"/>
          `}
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

<SingleSelect options={options} defaultValue={'Option 3'}/>
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
          title="Slot prop for Search"
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
                  search={<div>Search component</div>}
                />
              </div>
            </div>
          }
          code={`import { SingleSelect, ListItem } from '@heathmont/moon-core';

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

<SingleSelect 
  options={options}
  search={<div>Search component</div>}
/>
`}
        />
      </section>

      {/*Placeholder*/}
      <section className="mt-8">
        <Preview
          title="Placeholder"
          preview={
            <div className="flex flex-col justify-around items-center">
              <div className="flex justify-around items-center w-96">
                <SingleSelect
                  options={optionsAsString}
                  placeholderValue={<div>Choose an option</div>}
                />
              </div>
            </div>
          }
          code={`import { SingleSelect, ListItem } from '@heathmont/moon-core';

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

<SingleSelect 
  options={options}
  placeholderValue={<div>Choose an option</div>}
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
              name: 'placeholderValue',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Placeholder element',
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
