import React from 'react';

import Primary from '../../public/examples/button/Primary';
import Secondary from '../../public/examples/button/Secondary';
import Tertiary from '../../public/examples/button/Tertiary';
import Default from '../../public/examples/button/Default';
import Sizes from '../../public/examples/button/Sizes';
import Animations from '../../public/examples/button/Animations';
import Icons from '../../public/examples/button/Icons';
import IsIcon from '../../public/examples/button/IsIcon';
import FullWidth from '../../public/examples/button/FullWidth';
import Disabled from '../../public/examples/button/Disabled';

import Preview from '../../components/codePreview/Preview';
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
      {/* Primary */}
      <section className="mt-8">
        <Preview
          title="Primary"
          preview={<Primary />}
          code={examples ? examples.Primary : 'Loading'}
        />
      </section>
      {/* Secondary */}
      <section className="mt-8">
        <Preview
          title="Secondary"
          preview={<Secondary />}
          code={examples ? examples.Secondary : 'Loading'}
        />
      </section>
      {/* Tertiary */}
      <section className="mt-8">
        <Preview
          title="Tertiary"
          preview={<Tertiary />}
          code={examples ? examples.Tertiary : 'Loading'}
        />
      </section>
      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
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
      {/* Animations */}
      <section className="mt-8">
        <Preview
          title="Animations"
          preview={<Animations />}
          code={examples ? examples.Animations : 'Loading'}
        />
      </section>

      {/* Icons */}

      <section className="mt-8">
        <Preview
          title="Leading and trailing icons"
          preview={<Icons />}
          code={examples ? examples.Icons : 'Loading'}
        />
      </section>

      {/* Is Icon */}
      <section className="mt-8">
        <Preview
          title="isIcon"
          preview={<IsIcon />}
          code={examples ? examples.IsIcon : 'Loading'}
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
    </>
  );
}
