import React from 'react';
import Preview from '../../components/codePreview/Preview';
import Animations from '../../public/examples/buttonNew/Animations';
import Disabled from '../../public/examples/buttonNew/Disabled';
import FullWidth from '../../public/examples/buttonNew/FullWidth';
import Icons from '../../public/examples/buttonNew/Icons';
import Sizes from '../../public/examples/buttonNew/Sizes';
import Variants from '../../public/examples/buttonNew/Variants';
import useExamples from '../../utils/useExamples';

export default function PageButtonNew() {
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
    </>
  );
}
