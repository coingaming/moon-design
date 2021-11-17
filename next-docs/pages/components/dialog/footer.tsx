import React from 'react';

import Preview from '../../../components/codePreview/Preview';
import Table from '../../../components/Table';

import ButtonXs from '../../../public/examples/dialog/footer/ButtonXs';
import ButtonSm from '../../../public/examples/dialog/footer/ButtonSm';
import Size from '../../../public/examples/dialog/footer/Size';

import useExamples from '../../../utils/useExamples';

export default function PageDialogFooter() {
  const examples = useExamples('dialog/Footer');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Dialog Footer</h1>
        <p className="text-lg mt-4">
          Footer is a confirmatiuon module to be used in the Dialogs: Modal,
          Popover and the Multi select Dropdown
        </p>
      </section>

      {/* Buttons size: xs */}
      <section className="mt-8">
        <Preview
          title="Buttons size: xs"
          preview={<ButtonXs />}
          code={examples ? examples.ButtonXs : 'Loading'}
        />
      </section>

      {/* Buttons size: sm */}
      <section className="mt-8">
        <Preview
          title="Buttons size: sm"
          preview={<ButtonSm />}
          code={examples ? examples.ButtonSm : 'Loading'}
        />
      </section>

      {/*Size and Divider*/}
      <section className="mt-8">
        <Preview
          title="Size and Divider"
          preview={<Size />}
          code={examples ? examples.Size : 'Loading'}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for Dialog Footer component</h2>
        <Table
          data={[
            {
              name: 'primButton',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Button element',
            },
            {
              name: 'secButton',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Button element',
            },
            {
              name: 'tertButton',
              type: 'JSX.Element',
              required: false,
              default: '-',
              description: 'Button element',
            },
            {
              name: 'isDivider',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Add border top for footer',
            },
            {
              name: 'size',
              type: 'small | medium',
              required: false,
              default: '-',
              description: 'Set paddings around footer',
            },
          ]}
        />
      </section>
    </>
  );
}
