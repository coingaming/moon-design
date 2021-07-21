import React from 'react';

import { Tooltip } from '@heathmont/moon-components';

import Preview from '../../../components/codePreview/Preview';

const PreviewTooltip = () => {
  return <Preview title="Default" preview={<></>} code={``} />;
};

export default function PageTooltip() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Checkbox</h1>
        <p className="text-lg mt-4">Checkbox.</p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <PreviewTooltip />
      </section>
    </>
  );
}
