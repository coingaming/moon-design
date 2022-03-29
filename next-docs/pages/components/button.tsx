import React from 'react';
import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';
import Animations from '../../public/examples/button/Animations';
import Disabled from '../../public/examples/button/Disabled';
import FullWidth from '../../public/examples/button/FullWidth';
import Icons from '../../public/examples/button/Icons';
import Sizes from '../../public/examples/button/Sizes';
import Variants from '../../public/examples/button/Variants';
import useExamples from '../../utils/useExamples';

export default function PageButton() {
  const examples = useExamples('button');
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Button</h1>
        <p className="text-lg mt-4">
          Buttons are calls-to-action used to prompt users. They encourage users
          to interact with us in multiple ways throughout our galaxy, based on
          what the label of the button indicates.
        </p>

        <p className="text-lg mt-4">
          Buttons are clickable elements with label text that describe the
          action that will happen when the users interact with it.
        </p>
      </section>
      {/* Variants */}
      <section className="mt-8">
        <Preview
          title="Variants"
          preview={<Variants />}
          code={examples ? examples.Variants : 'Loading'}
        />
      </section>
      {/* Sizes */}
      <section className="mt-8">
        <Preview
          title="Sizes"
          preview={<Sizes />}
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>
      {/* Icons */}
      <section className="mt-8">
        <Preview
          title="Icons"
          preview={<Icons />}
          code={examples ? examples.Icons : 'Loading'}
        />
      </section>
      {/* Full width */}
      <section className="mt-8">
        <Preview
          title="Full width"
          preview={<FullWidth />}
          code={examples ? examples.FullWidth : 'Loading'}
        />
      </section>
      {/* Disabled */}
      <section className="mt-8">
        <Preview
          title="Disabled"
          preview={<Disabled />}
          code={examples ? examples.Disabled : 'Loading'}
        />
      </section>
      {/* Animations */}
      <section className="mt-8">
        <Preview
          title="Animations"
          preview={<Animations />}
          code={examples ? examples.Animations : 'Loading'}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props</h2>
        <Table
          data={[
            {
              name: 'variant',
              type: 'primary | secondary | tertiary | ghost',
              required: false,
              default: 'primary',
              description: 'Visual/Logical variant of Button',
            },
            {
              name: 'size',
              type: 'small | medium | large | xlarge',
              required: false,
              default: 'medium',
              description: 'Size of Button',
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
              description: 'Right icon element',
            },
            {
              name: 'iconOnly',
              type: 'React.ReactElement',
              required: false,
              default: '-',
              description: 'Icon only element',
            },
            {
              name: 'fullWidth',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Full width Button',
            },
            {
              name: 'disabled',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Disabled Button',
            },
            {
              name: 'animation',
              type: 'progress | success | error | pulse',
              required: false,
              default: '-',
              description: 'Animation of Button',
            },
          ]}
        />
      </section>
    </>
  );
}
