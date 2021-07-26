// @ts-nocheck
import React from 'react';

import { Form, FormItem, TextInput, Tooltip } from '@heathmont/moon-components';

import Preview from '../../components/codePreview/Preview';

const PreviewTooltip = () => {
  return (
    <Preview
      title="Default"
      preview={
        <div className="w-64 h-16">
          <Tooltip active>Hello, I'm a Tooltip</Tooltip>
        </div>
      }
      code={`import { Tooltip } from '@heathmont/moon-components';

<div style={{ width: '10rem', height: '4rem' }}>
  <Tooltip active>Hello, I'm a Tooltip</Tooltip>
</div>
`}
    />
  );
};

const PreviewTooltipInfo = () => {
  return (
    <Preview
      title="In form"
      preview={
        <div className="w-64 h-32">
          <Form maxWidth="30em">
            <FormItem>
              <TextInput
                label="Password"
                type="password"
                aria-describedby="eg-tooltip-1"
              />
              <Tooltip id="eg-tooltip-1" active align="right">
                <p>Any hint or additional info</p>
              </Tooltip>
            </FormItem>
          </Form>
        </div>
      }
      code={`import { Form, FormItem, TextInput, Tooltip } from '@heathmont/moon-components';

<div style={{ width: '10rem', height: '8rem' }}>
  <Form maxWidth="30em">
    <FormItem>
      <TextInput
        label="Password"
        type="password"
        aria-describedby="eg-tooltip-1"
      />
      <Tooltip id="eg-tooltip-1" active align="right">
        <p>Any hint or additional info</p>
      </Tooltip>
    </FormItem>
  </Form>
</div>
`}
    />
  );
};

const PreviewTooltipCloseable = () => {
  return (
    <Preview
      title="Closeable"
      preview={
        <div className="w-64 h-36">
          <Form maxWidth="30em">
            <FormItem>
              <TextInput
                label="Password"
                type="password"
                aria-describedby="eg-tooltip-1"
              />
              <Tooltip
                id="eg-tooltip-1"
                active
                align="right"
                onClose={() => {
                  console.log('Closed');
                }}
              >
                <p>Any hint or additional info</p>
              </Tooltip>
            </FormItem>
          </Form>
        </div>
      }
      code={`import { Tooltip } from '@heathmont/moon-components';

<div style={{ width: '10rem', height: '8rem' }}>
  <Form maxWidth="30em">
    <FormItem>
      <TextInput
        label="Password"
        type="password"
        aria-describedby="eg-tooltip-1"
      />
      <Tooltip
        id="eg-tooltip-1"
        active
        align="right"
        onClose={() => {
          console.log('Closed');
        }}
      >
        <p>Any hint or additional info</p>
      </Tooltip>
    </FormItem>
  </Form>
</div>
`}
    />
  );
};

const PreviewTooltipError = () => {
  return (
    <Preview
      title="Error"
      preview={
        <div className="w-64 h-36">
          <Form maxWidth="30em">
            <FormItem>
              <TextInput
                label="Password"
                type="password"
                aria-describedby="eg-tooltip-1"
              />
              <Tooltip id="eg-tooltip-1" error active align="right">
                <p>Your password is not strong enough</p>
              </Tooltip>
            </FormItem>
          </Form>
        </div>
      }
      code={`import { Tooltip } from '@heathmont/moon-components';

<div style={{ width: '10rem', height: '8rem' }}>
  <Form maxWidth="30em">
    <FormItem>
      <TextInput
        label="Password"
        type="password"
        aria-describedby="eg-tooltip-1"
      />
      <Tooltip id="eg-tooltip-1" error active align="right">
        <p>Your password is not strong enough</p>
      </Tooltip>
    </FormItem>
  </Form>
</div>
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

      <section className="mt-8">
        <PreviewTooltipInfo />
        <p className="text-lg mt-4">
          When using Tooltips, you must provide a unique ID and reference as the
          aria-describedby in the origin element.
        </p>
        <p className="text-lg mt-4">
          This will ensure users accessing via assitive technologies (such as
          screenreaders) will also benefit from the contextual info.
        </p>
      </section>

      <section className="mt-8">
        <PreviewTooltipCloseable />
      </section>

      <section className="mt-8">
        <PreviewTooltipError />
      </section>
    </>
  );
}
