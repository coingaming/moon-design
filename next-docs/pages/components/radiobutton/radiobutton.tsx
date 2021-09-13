import React from 'react';

import {
  RadioButton,
  RadioButtonLabel,
  RadioButtonInput,
} from '@heathmont/moon-core';

import Preview from '../../../components/codePreview/Preview';

const Example = () => {
  return (
    <>
      <h4 className="mb-2">Please select your age:</h4>
      <div className="mb-2">
        <RadioButton name="age" label="0 - 30" id="age1" />
      </div>
      <div className="mb-2">
        <RadioButton name="age" label="31 - 60" id="age2" />
      </div>
      <div className="mb-2">
        <RadioButton name="age" label="61 - 100" id="age3" />
      </div>
    </>
  );
};

export default function RadioButtonPage() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">RadioButton</h1>
        <p className="text-lg mt-4">
          Radio buttons are used to represent a group or category of choices
          whereby users can only select one option - the main difference from
          checkboxes that allow users to select multiple options.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="RadioButton"
          preview={<Example />}
          code={`import { RadioButton } from '@heathmont/moon-core';

<RadioButton name="age" label="0 - 30" id="age1" />
<RadioButton name="age" label="31 - 60" id="age2" />
<RadioButton name="age" label="61 - 100" id="age3" />
`}
        />
      </section>
    </>
  );
}
