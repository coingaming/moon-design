import React from 'react';
import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';
import Buttons from '../../public/examples/banner/Buttons';
import Default from '../../public/examples/banner/Default';
import HeaderIcon from '../../public/examples/banner/HeaderIcon';
import Mobile from '../../public/examples/banner/Mobile';
import useExamples from '../../utils/useExamples';

export default function PageBanner() {
  const examples = useExamples('banner');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Banner</h1>
        <p className="text-lg mt-4">
          Banners are used to show users important, succinct messages, or space
          alerts, that users should know about. They can interact or ignore
          banners at any time, as they are non-modal. What to take note of when
          using banners Only one banner should be shown at a time. Banners
          require user action in order to be dismissed. Messages should consist
          of no longer than one headline, one description sentence and one short
          call-to-action.
        </p>
      </section>

      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Buttons"
          preview={<Buttons />}
          code={examples ? examples.Buttons : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Header Icon"
          preview={<HeaderIcon />}
          code={examples ? examples.HeaderIcon : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Mobile"
          preview={<Mobile />}
          code={examples ? examples.Mobile : 'Loading'}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props</h2>
        <Table
          data={[
            {
              name: 'size',
              type: 'xsmall | small | medium | large',
              required: false,
              default: 'medium',
              description: 'Size for avatar',
            },
          ]}
        />
      </section>
    </>
  );
}
