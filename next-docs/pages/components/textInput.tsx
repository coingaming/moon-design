import React from 'react';
import { TextInput } from '@heathmont/moon-core';
import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';

const PreviewTextInputXS = () => {
  return (
    <>
      <section className="mt-8">
        <Preview
          title="xsmall (Default)"
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 mb-4 items-end">
                <TextInput
                  type="text"
                  inputSize="xsmall"
                  label="Label text"
                  placeholder="Placeholder"
                />

                <TextInput
                  type="text"
                  inputSize="xsmall"
                  placeholder="Placeholder"
                />
              </div>

              <div className="flex gap-4 mb-4 items-end">
                <TextInput
                  type="text"
                  inputSize="xsmall"
                  label="Label text"
                  placeholder="Placeholder"
                  hintText="Informative message holder"
                />

                <TextInput
                  type="text"
                  placeholder="Placeholder"
                  inputSize="xsmall"
                  hintText="Informative message holder"
                />
              </div>

              <div className="flex gap-4 mb-4 items-end">
                <TextInput
                  type="text"
                  inputSize="xsmall"
                  label="Disabled"
                  placeholder="Placeholder"
                  hintText="Informative message holder"
                  disabled
                />

                <TextInput
                  type="text"
                  label="Error"
                  placeholder="Placeholder"
                  inputSize="xsmall"
                  hintText="Informative message holder"
                  isError
                />
              </div>
            </div>
          }
          code={`import { TextInput } from '@heathmont/moon-core';

<TextInput
  type="text"
  inputSize="xsmall"
  label="Label text"
  placeholder="Placeholder"
/>

<TextInput type="text" inputSize="xsmall" placeholder="Placeholder" />

<TextInput
  type="text"
  inputSize="xsmall"
  label="Label text"
  placeholder="Placeholder"
  hintText="Informative message holder"
/>

<TextInput
  type="text"
  placeholder="Placeholder"
  inputSize="xsmall"
  hintText="Informative message holder"
/>

<TextInput
  type="text"
  inputSize="xsmall"
  label="Disabled"
  placeholder="Placeholder"
  hintText="Informative message holder"
  disabled
/>

<TextInput
  type="text"
  label="Error"
  placeholder="Placeholder"
  inputSize="xsmall"
  hintText="Informative message holder"
  isError
/>
`}
        />
      </section>
      <section className="mt-8">
        <Preview
          title="xsmall (Types)"
          preview={
            <div className="flex flex-col gap-4">
              <TextInput type="date" label="Date" inputSize="xsmall" />
              <TextInput
                type="datetime-local"
                inputSize="xsmall"
                label="Date and time"
              />

              <TextInput
                type="email"
                inputSize="xsmall"
                label="Email"
                placeholder="e.g. jake.weary@sportsbet.io"
              />

              <TextInput
                type="number"
                inputSize="xsmall"
                label="Number"
                placeholder="e.g. 1234"
                required
              />

              <TextInput
                type="password"
                inputSize="xsmall"
                placeholder="Please enter your account password"
                label="Password"
                showPasswordText="Show"
              />

              <TextInput
                type="search"
                inputSize="xsmall"
                label="Search"
                placeholder="e.g. EPL"
                required
              />

              <TextInput
                type="tel"
                inputSize="xsmall"
                label="Telephone"
                placeholder="e.g. +372 123 4567"
              />

              <TextInput type="time" inputSize="xsmall" label="Time" />

              <TextInput
                type="url"
                inputSize="xsmall"
                label="URL"
                placeholder="e.g. https://sportsbet.io"
              />
            </div>
          }
          code={`import { TextInput } from '@heathmont/moon-core';

<TextInput type="date" label="Date" inputSize="xsmall" />

<TextInput type="datetime-local" inputSize="xsmall" label="Date and time" />

<TextInput
  type="email"
  inputSize="xsmall"
  label="Email"
  placeholder="e.g. jake.weary@sportsbet.io"
/>

<TextInput
  type="number"
  inputSize="xsmall"
  label="Number"
  placeholder="e.g. 1234"
  required
/>

<TextInput
  type="password"
  inputSize="xsmall"
  placeholder="Please enter your account password"
  label="Password"
  showPasswordText="Show"
/>

<TextInput
  type="search"
  inputSize="xsmall"
  label="Search"
  placeholder="e.g. EPL"
  required
/>

<TextInput
  type="tel"
  inputSize="xsmall"
  label="Telephone"
  placeholder="e.g. +372 123 4567"
/>

<TextInput type="time" inputSize="xsmall" label="Time" />

<TextInput
  type="url"
  inputSize="xsmall"
  label="URL"
  placeholder="e.g. https://sportsbet.io"
/>
`}
        />
      </section>
    </>
  );
};

const PreviewTextInputS = () => {
  return (
    <>
      <section className="mt-8">
        <Preview
          title="small (Default)"
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 mb-4 items-end">
                <TextInput
                  type="text"
                  inputSize="small"
                  label="Label text"
                  placeholder="Placeholder"
                />

                <TextInput
                  type="text"
                  inputSize="small"
                  placeholder="Placeholder"
                />
              </div>

              <div className="flex gap-4 mb-4 items-end">
                <TextInput
                  type="text"
                  inputSize="small"
                  label="Label text"
                  placeholder="Placeholder"
                  hintText="Informative message holder"
                />

                <TextInput
                  type="text"
                  placeholder="Placeholder"
                  inputSize="small"
                  hintText="Informative message holder"
                />
              </div>

              <div className="flex gap-4 mb-4 items-end">
                <TextInput
                  type="text"
                  inputSize="small"
                  label="Disabled"
                  placeholder="Placeholder"
                  hintText="Informative message holder"
                  disabled
                />

                <TextInput
                  type="text"
                  label="Error"
                  placeholder="Placeholder"
                  inputSize="small"
                  hintText="Informative message holder"
                  isError
                />
              </div>
            </div>
          }
          code={`import { TextInput } from '@heathmont/moon-core';

<TextInput
  type="text"
  inputSize="small"
  label="Label text"
  placeholder="Placeholder"
/>

<TextInput type="text" inputSize="xsmall" placeholder="Placeholder" />

<TextInput
  type="text"
  inputSize="small"
  label="Label text"
  placeholder="Placeholder"
  hintText="Informative message holder"
/>

<TextInput
  type="text"
  placeholder="Placeholder"
  inputSize="small"
  hintText="Informative message holder"
/>

<TextInput
  type="text"
  inputSize="small"
  label="Disabled"
  placeholder="Placeholder"
  hintText="Informative message holder"
  disabled
/>

<TextInput
  type="text"
  label="Error"
  placeholder="Placeholder"
  inputSize="small"
  hintText="Informative message holder"
  isError
/>
`}
        />
      </section>
      <section className="mt-8">
        <Preview
          title="small (Types)"
          preview={
            <div className="flex flex-col gap-4">
              <TextInput type="date" label="Date" inputSize="small" />
              <TextInput
                type="datetime-local"
                inputSize="small"
                label="Date and time"
              />

              <TextInput
                type="email"
                inputSize="small"
                label="Email"
                placeholder="e.g. jake.weary@sportsbet.io"
              />

              <TextInput
                type="number"
                inputSize="small"
                label="Number"
                placeholder="e.g. 1234"
                required
              />

              <TextInput
                type="password"
                inputSize="small"
                placeholder="Please enter your account password"
                label="Password"
                showPasswordText="Show"
              />

              <TextInput
                type="search"
                inputSize="small"
                label="Search"
                placeholder="e.g. EPL"
                required
              />

              <TextInput
                type="tel"
                inputSize="small"
                label="Telephone"
                placeholder="e.g. +372 123 4567"
              />

              <TextInput type="time" inputSize="xsmall" label="Time" />

              <TextInput
                type="url"
                inputSize="small"
                label="URL"
                placeholder="e.g. https://sportsbet.io"
              />
            </div>
          }
          code={`import { TextInput } from '@heathmont/moon-core';

<TextInput type="date" label="Date" inputSize="xsmall" />

<TextInput type="datetime-local" inputSize="xsmall" label="Date and time" />

<TextInput
  type="email"
  inputSize="small"
  label="Email"
  placeholder="e.g. jake.weary@sportsbet.io"
/>

<TextInput
  type="number"
  inputSize="small"
  label="Number"
  placeholder="e.g. 1234"
  required
/>

<TextInput
  type="password"
  inputSize="small"
  placeholder="Please enter your account password"
  label="Password"
  showPasswordText="Show"
/>

<TextInput
  type="search"
  inputSize="small"
  label="Search"
  placeholder="e.g. EPL"
  required
/>

<TextInput
  type="tel"
  inputSize="small"
  label="Telephone"
  placeholder="e.g. +372 123 4567"
/>

<TextInput type="time" inputSize="xsmall" label="Time" />

<TextInput
  type="url"
  inputSize="small"
  label="URL"
  placeholder="e.g. https://sportsbet.io"
/>
`}
        />
      </section>
    </>
  );
};

const PreviewTextInputM = () => {
  return (
    <>
      <section className="mt-8">
        <Preview
          title="medium (Default)"
          preview={
            <div className="flex flex-col gap-4">
              <p>Text input medium size should always be with label</p>
              <TextInput
                type="text"
                inputSize="medium"
                label="Label text"
                placeholder="Placeholder"
              />

              <TextInput
                type="text"
                inputSize="medium"
                label="Label text"
                placeholder="Placeholder"
                hintText="Informative message holder"
              />

              <div className="flex gap-4 mb-4 items-end">
                <TextInput
                  type="text"
                  inputSize="medium"
                  label="Disabled"
                  placeholder="Placeholder"
                  hintText="Informative message holder"
                  disabled
                />

                <TextInput
                  type="text"
                  label="Error"
                  placeholder="Placeholder"
                  inputSize="medium"
                  hintText="Informative message holder"
                  isError
                />
              </div>
            </div>
          }
          code={`import { TextInput } from '@heathmont/moon-core';

<TextInput
  type="text"
  inputSize="medium"
  label="Label text"
  placeholder="Placeholder"
/>

<TextInput
  type="text"
  inputSize="medium"
  label="Label text"
  placeholder="Placeholder"
  hintText="Informative message holder"
/>

<TextInput
  type="text"
  inputSize="medium"
  label="Disabled"
  placeholder="Placeholder"
  hintText="Informative message holder"
  disabled
/>

<TextInput
  type="text"
  label="Error"
  placeholder="Placeholder"
  inputSize="medium"
  hintText="Informative message holder"
  isError
/>
`}
        />
      </section>
      <section className="mt-8">
        <Preview
          title="medium (Types)"
          preview={
            <div className="flex flex-col gap-4">
              <TextInput type="date" label="Date" inputSize="medium" />
              <TextInput
                type="datetime-local"
                inputSize="medium"
                label="Date and time"
              />

              <TextInput
                type="email"
                inputSize="medium"
                label="Email"
                placeholder="e.g. jake.weary@sportsbet.io"
              />

              <TextInput
                type="number"
                inputSize="medium"
                label="Number"
                placeholder="e.g. 1234"
                required
              />

              <TextInput
                type="password"
                inputSize="medium"
                placeholder="Please enter your account password"
                label="Password"
                showPasswordText="Show"
              />

              <TextInput
                type="search"
                inputSize="medium"
                label="Search"
                placeholder="e.g. EPL"
                required
              />

              <TextInput
                type="tel"
                inputSize="medium"
                label="Telephone"
                placeholder="e.g. +372 123 4567"
              />

              <TextInput type="time" inputSize="medium" label="Time" />

              <TextInput
                type="url"
                inputSize="medium"
                label="URL"
                placeholder="e.g. https://sportsbet.io"
              />
            </div>
          }
          code={`import { TextInput } from '@heathmont/moon-core';

<TextInput type="date" label="Date" inputSize="medium" />

<TextInput type="datetime-local" inputSize="medium" label="Date and time" />

<TextInput
  type="email"
  inputSize="medium"
  label="Email"
  placeholder="e.g. jake.weary@sportsbet.io"
/>

<TextInput
  type="number"
  inputSize="medium"
  label="Number"
  placeholder="e.g. 1234"
  required
/>

<TextInput
  type="password"
  inputSize="medium"
  placeholder="Please enter your account password"
  label="Password"
  showPasswordText="Show"
/>

<TextInput
  type="search"
  inputSize="medium"
  label="Search"
  placeholder="e.g. EPL"
  required
/>

<TextInput
  type="tel"
  inputSize="medium"
  label="Telephone"
  placeholder="e.g. +372 123 4567"
/>

<TextInput type="time" inputSize="medium" label="Time" />

<TextInput
  type="url"
  inputSize="medium"
  label="URL"
  placeholder="e.g. https://sportsbet.io"
/>
`}
        />
      </section>
    </>
  );
};

export default function PageTextInput() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">TextInput</h1>
        <p className="text-lg mt-4">
          The input component is used when you need to let users enter the text
          of some kind, such as their name or phone number etc.
        </p>

        <p className="text-lg mt-4">
          All text inputs must have visible labels/placeholder text.
        </p>

        <p className="text-lg mt-4">
          For mobile, the usage of respected keyboards is recommended, f.e. if
          it’s likely that the user will need to enter a number and you want to
          bring up the numeric keypad on a mobile device.
        </p>

        <p className="text-lg mt-4">
          Text inputs support a range of input formats, some of which include
          automatic browser validation. These can be set by providing HTML input
          type attributtes:
        </p>
      </section>

      {/* XS */}
      <section className="mt-8">
        <PreviewTextInputXS />
      </section>

      {/* S */}
      <section className="mt-8">
        <PreviewTextInputS />
      </section>

      {/* M */}
      <section className="mt-8">
        <PreviewTextInputM />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for Dialog Header component</h2>
        <Table
          data={[
            {
              name: 'inputSize',
              type: 'xsmall | small | medium',
              required: true,
              default: 'xsmall',
              description: 'Input size',
            },
            {
              name: 'type',
              type: 'TextInputTypes',
              required: true,
              default: 'text',
              description: 'Different types of input',
            },
            {
              name: 'label',
              type: 'JSX.Element | string',
              required: false,
              default: '',
              description: 'Required for medium size',
            },
            {
              name: 'placeholder',
              type: 'string',
              required: false,
              default: '',
              description: 'Placeholder for input',
            },
            {
              name: 'id',
              type: 'string',
              required: false,
              default: '-',
              description: 'Set input id',
            },
            {
              name: 'hintText',
              type: 'JSX.Element | string',
              required: false,
              default: '',
              description: 'Informative or error message under input',
            },
            {
              name: 'isError',
              type: 'boolean',
              required: false,
              default: '',
              description: 'Set error state for input',
            },
            {
              name: 'showPasswordText',
              type: 'JSX.Element | string',
              required: false,
              default: '',
              description:
                'Only for input type password. Text for toggle button: show/hide password',
            },
            {
              name: 'backgroundColor',
              type: 'ColorProps',
              required: false,
              default: 'inherit',
              description: 'Background color',
            },
          ]}
        />
      </section>
    </>
  );
}
