import React from 'react';

import { Label } from '@heathmont/moon-core';

import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';
import { ControlsClose, GenericInfo } from '@heathmont/moon-icons';

export default function PageLabel() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Label</h1>
        <p className="text-lg mt-4">Small count and labeling component.</p>
      </section>

      {/* Colours */}
      <section className="mt-8">
        <Preview
          title="Colours"
          preview={
            <div className="flex justify-around items-center w-full">
              <Label>Medium</Label>
              <Label color="piccolo.100" backgroundColor="trunks.100">
                Medium
              </Label>
              <Label color="goten.100" backgroundColor="dodoria.100">
                Medium
              </Label>
            </div>
          }
          code={`import { Label } from '@heathmont/moon-core';

<Label>Medium</Label>
<Label color="piccolo.100" backgroundColor="trunks.100">Medium</Label>
<Label color="goten.100" backgroundColor="dodoria.100">Medium</Label>
`}
        />
      </section>

      {/* Sizes */}
      <section className="mt-8">
        <Preview
          title="Sizes"
          preview={
            <div className="flex justify-around items-center w-full">
              <Label size="small">Small</Label>
              <Label>Medium</Label>
            </div>
          }
          code={`import { Label } from '@heathmont/moon-core';

<Label size="small">Small</Label>

<Label>Medium</Label>
`}
        />
      </section>

      {/* Sizes */}
      <section className="mt-8">
        <Preview
          title="Label with additional elements"
          preview={
            <div className="flex flex-col justify-around items-center w-full">
              <div className="flex justify-around items-center w-full mb-4">
                <Label size="small">Small</Label>
                <Label size="small" iconLeft={<GenericInfo />}>
                  Small
                </Label>
                <Label size="small" iconRight={<ControlsClose />}>
                  Small
                </Label>
                <Label
                  size="small"
                  iconLeft={<GenericInfo />}
                  iconRight={<ControlsClose />}
                >
                  Small
                </Label>
              </div>
              <div className="flex justify-around items-center w-full">
                <Label>Medium</Label>
                <Label iconLeft={<GenericInfo />}>Medium</Label>
                <Label iconRight={<ControlsClose />}>Medium</Label>
                <Label iconLeft={<GenericInfo />} iconRight={<ControlsClose />}>
                  Medium
                </Label>
              </div>
            </div>
          }
          code={`import { Label } from '@heathmont/moon-core';
import { ControlsClose, GenericInfo } from '@heathmont/moon-icons';

<Label size="small">Small</Label>
<Label size="small" iconLeft={<GenericInfo />}>Small</Label>
<Label size="small" iconRight={<ControlsClose />}>Small</Label>
<Label size="small" iconLeft={<GenericInfo />} iconRight={<ControlsClose />}>Small</Label>

<Label>Medium</Label>
<Label iconLeft={<GenericInfo />}>Medium</Label>
<Label iconRight={<ControlsClose/>}>Medium</Label>
<Label iconLeft={<GenericInfo />} iconRight={<ControlsClose />}>Medium</Label>
`}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for Label component</h2>
        <Table
          data={[
            {
              name: 'size',
              type: 'small | medium',
              required: false,
              default: 'medium',
              description: 'Small/medium size for label',
            },
            {
              name: 'iconLeft',
              type: 'React.ReactElement',
              required: false,
              default: '-',
              description: 'Left icon element',
            },
            {
              name: 'iconRight',
              type: 'React.ReactElement',
              required: false,
              default: '-',
              description: 'Rigth text element',
            },
            {
              name: 'color',
              type: 'ColorProps',
              required: false,
              default: 'goten.100',
              description: 'Text color',
            },
            {
              name: 'backgroundColor',
              type: 'ColorProps',
              required: false,
              default: 'bulma.100',
              description: 'Background color',
            },
          ]}
        />
      </section>
    </>
  );
}
