import React from 'react';

import WithLabel from '../../../public/examples/select/multiReactSelect/WithLabel';
import WithoutLabel from '../../../public/examples/select/multiReactSelect/WithoutLabel';
import Hint from '../../../public/examples/select/multiReactSelect/Hint';
import Disabled from '../../../public/examples/select/multiReactSelect/Disabled';
import WithCounter from '../../../public/examples/select/multiReactSelect/WithCounter';
import OptionsContent from '../../../public/examples/select/multiReactSelect/OptionsContent';
import ListWidth from '../../../public/examples/select/multiReactSelect/ListWidth';

import Preview from '../../../components/codePreview/Preview';

import useExamples from '../../../utils/useExamples';

export default function PageSelect() {
  const examples = useExamples('select/select');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Select</h1>
        <p className="text-lg mt-4">
          This Multi Select based on react-select library.
        </p>
        <p className="text-lg mt-4">
          By default, Select stretches to full width on small devices.
        </p>
        <p className="text-lg mt-4">
          For Select inputs that need to remain full width on all devices, use
          the fullWidth prop.
        </p>
      </section>

      {/* WithLabel */}
      <section className="mt-8">
        <Preview
          title="With label"
          preview={<WithLabel />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* WithoutLabel */}
      <section className="mt-8">
        <Preview
          title="Without label"
          preview={<WithoutLabel />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* Hint */}
      <section className="mt-8">
        <Preview
          title="Hint message"
          preview={<Hint />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* Disabled */}
      <section className="mt-8">
        <Preview
          title="Disabled"
          preview={<Disabled />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* WithCounter */}
      <section className="mt-8">
        <Preview
          title="With counter"
          preview={<WithCounter />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* OptionsContent */}
      <section className="mt-8">
        <Preview
          title="Options Content"
          preview={<OptionsContent />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/*InputWidth*/}
      <section className="mt-8">
        <Preview
          title="List options width"
          preview={<ListWidth />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>
    </>
  );
}
