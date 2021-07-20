import React from 'react';

import { TextInput } from '@heathmont/moon-components';

import Preview from '../../components/codePreview/Preview';

const PreviewTextInput = () => {
  return (
    <Preview
      title="Types"
      preview={
        <div className="flex flex-col gap-4">
          <TextInput type="text" label="Text" placeholder="e.g. username" />

          <TextInput type="date" label="Date" />

          <TextInput type="datetime-local" label="Date and time" />

          <TextInput
            type="email"
            label="Email"
            placeholder="e.g. jake.weary@sportsbet.io"
          />

          <TextInput
            type="number"
            label="Number"
            placeholder="e.g. 1234"
            required
          />

          <TextInput
            type="password"
            placeholder="Please enter your account password"
            label="Password"
          />

          <TextInput
            type="search"
            label="Search"
            placeholder="e.g. EPL"
            required
          />

          <TextInput
            type="tel"
            label="Telephone"
            placeholder="e.g. +372 123 4567"
          />

          <TextInput type="time" label="Time" />

          <TextInput
            type="url"
            label="URL"
            placeholder="e.g. https://sportsbet.io"
          />
        </div>
      }
      code={`import { TextInput } from '@heathmont/moon-components';

<TextInput type="text" label="Text" placeholder="e.g. username" />

<TextInput type="date" label="Date" />

<TextInput type="datetime-local" label="Date and time" />

<TextInput
  type="email"
  label="Email"
  placeholder="e.g. jake.weary@sportsbet.io"
/>

<TextInput
  type="number"
  label="Number"
  placeholder="e.g. 1234"
  required
/>

<TextInput
  type="password"
  placeholder="Please enter your account password"
  label="Password"
/>

<TextInput
  type="search"
  label="Search"
  placeholder="e.g. EPL"
  required
/>

<TextInput
  type="tel"
  label="Telephone"
  placeholder="e.g. +372 123 4567"
/>

<TextInput type="time" label="Time" />

<TextInput
  type="url"
  label="URL"
  placeholder="e.g. https://sportsbet.io"
/>
`}
    />
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

      {/* Default */}
      <section className="mt-8">
        <PreviewTextInput />
      </section>
    </>
  );
}
