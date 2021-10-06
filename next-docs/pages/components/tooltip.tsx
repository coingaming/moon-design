import React from 'react';

import { Tooltip, Text } from '@heathmont/moon-core';

import Preview from '../../components/codePreview/Preview';

const PreviewTooltip = () => {
  return (
    <Preview
      title="Default"
      preview={
        <div className="flex gap-20">
          <Tooltip>
            <Text size={14}>Text with font size 14</Text>
          </Tooltip>
          <Tooltip position="bottom">
            <Text size={14}>Bottom</Text>
          </Tooltip>
        </div>
      }
      code={`import { Tooltip, Text } from '@heathmont/moon-core';

<Tooltip>
  <Text size={14}>Text with font size 14</Text>
</Tooltip>

<Tooltip position="bottom">
  <Text size={14}>Bottom</Text>
</Tooltip>
`}
    />
  );
};

export default function PageTooltip() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Tooltip</h1>
        <p className="text-lg mt-4">
          Tooltips offer further contextual information to users.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <PreviewTooltip />
      </section>
    </>
  );
}
