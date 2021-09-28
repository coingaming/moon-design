import React from 'react';

import { Select } from '@heathmont/moon-components';

import Preview from '../../../components/codePreview/Preview';

const PreviewSelect = () => {
  return (
    <Preview
      title="Examples"
      preview={
        <Select>
          <option value="">Select an option</option>
          <option value="never-gonna">Never gonna</option>
          <option value="give-you-up">give you up</option>
          <option value="let-you-down">let you down</option>
        </Select>
      }
      code={`import { Select } from '@heathmont/moon-components';

<Select>
  <option value="">Select an option</option>
  <option value="never-gonna">Never gonna</option>
  <option value="give-you-up">give you up</option>
  <option value="let-you-down">let you down</option>
</Select>
`}
    />
  );
};

const PreviewSelectWithLabel = () => {
  return (
    <Preview
      title="with label"
      preview={
        <Select label="Label Content">
          <option value="">Select an option</option>
          <option value="never-gonna">Never gonna</option>
          <option value="give-you-up">give you up</option>
          <option value="let-you-down">let you down</option>
        </Select>
      }
      code={`import { Select } from '@heathmont/moon-components';

<Select label="Label Content">
  <option value="">Select an option</option>
  <option value="never-gonna">Never gonna</option>
  <option value="give-you-up">give you up</option>
  <option value="let-you-down">let you down</option>
</Select>
`}
    />
  );
};

export default function PageSelect() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Select</h1>
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
        <PreviewSelect />
      </section>

      <section className="mt-8">
        <PreviewSelectWithLabel />
      </section>
    </>
  );
}
