import React from 'react';

import { Checkbox } from '@heathmont/moon-core';

import Preview from '../../components/codePreview/Preview';

const Example = () => {
  return (
    <Checkbox label="I agree to receive bonus & marketing emails." />
  );
};

export default function PageSearch() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Checkbox</h1>
        <p className="text-lg mt-4">Checkbox.</p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Example />
      </section>
    </>
  );
}
