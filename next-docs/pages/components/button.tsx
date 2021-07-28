import React from 'react';

import { Button } from '@heathmont/moon-components';
import { IconProfile } from '@heathmont/moon-assets';

import Preview from '../../components/codePreview/Preview';

export default function PageButton() {
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
          preview={<Button variant="primary">Primary</Button>}
          code={`import { Button } from '@heathmont/moon-components';

<Button variant="primary">Active</Button>`}
        />
      </section>
      {/* Secondary */}
      <section className="mt-8">
        <Preview
          title="Secondary"
          preview={<Button variant="secondary">Secondary</Button>}
          code={`import { Button } from '@heathmont/moon-components';

<Button variant="secondary">Secondary</Button>`}
        />
      </section>
      {/* Tertiary */}
      <section className="mt-8">
        <Preview
          title="Tertiary"
          preview={<Button variant="tertiary">Tertiary</Button>}
          code={`import { Button } from '@heathmont/moon-components';

<Button variant="tertiary">Tertiary</Button>`}
        />
      </section>
      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Button variant="default">Default</Button>}
          code={`import { Button } from '@heathmont/moon-components';

<Button variant="default">Default</Button>`}
        />
      </section>
      {/* Sizes */}
      <section className="mt-8">
        <Preview
          title="Sizes"
          preview={
            <div className="flex justify-around w-full items-center">
              <Button variant="primary" size="xsmall">
                Xsmall
              </Button>
              <Button variant="primary" size="small">
                Small
              </Button>
              <Button variant="primary" size="medium">
                Medium
              </Button>
              <Button variant="primary" size="large">
                Large
              </Button>
            </div>
          }
          code={`import { Button } from '@heathmont/moon-components';

<Button variant="primary" size="xsmall">
  Xsmall
</Button>

<Button variant="primary" size="small">
  Small
</Button>

<Button variant="primary" size="medium">
  Medium
</Button>

<Button variant="primary" size="large">
  Large
</Button>`}
        />
      </section>
      {/* Animations */}
      <section className="mt-8">
        <Preview
          title="Animations"
          preview={
            <div className="flex justify-around w-full">
              <Button progress variant="primary">
                Default
              </Button>
              <Button success variant="primary">
                Default
              </Button>
              <Button oops variant="primary">
                Default
              </Button>
              <Button pulse variant="primary">
                Default
              </Button>
            </div>
          }
          code={`import { Button } from '@heathmont/moon-components';

<Button progress variant="primary">
  Default
</Button>

<Button success variant="primary">
  Default
</Button>

<Button oops variant="primary">
  Default
</Button>

<Button pulse variant="primary">
  Default
</Button>`}
        />
      </section>

      {/* Icons */}

      <section className="mt-8">
        <Preview
          title="Leading and trailing icons"
          preview={
            <div className="flex justify-around w-full">
              <Button iconLeft={<IconProfile color="#fff" />} variant="primary">
                Default
              </Button>
              <Button
                iconRight={<IconProfile color="#fff" />}
                variant="primary"
              >
                Default
              </Button>
            </div>
          }
          code={`import { Button } from '@heathmont/moon-components';

<Button iconLeft={<IconProfile color="#fff" />} variant="primary">
  Default
</Button>

<Button
  iconRight={<IconProfile color="#fff" />}
  variant="primary"
>
  Default
</Button>`}
        />
      </section>

      {/* Full width */}
      <section className="mt-8">
        <Preview
          title="Full width"
          preview={<Button fullWidth variant="primary">Action</Button>}
          code={`import { Button } from '@heathmont/moon-components';

<Button fullWidth variant="primary">Action</Button>`}
        />
      </section>
    </>
  );
}
