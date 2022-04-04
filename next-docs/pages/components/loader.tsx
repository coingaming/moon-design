import React from 'react';
import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
import Colours from '../../public/examples/loader/Colours';
import Default from '../../public/examples/loader/Default';
import Sizes from '../../public/examples/loader/Sizes';
import useExamples from '../../utils/useExamples';

const PageLoader = () => {
  const examples = useExamples('loader');
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Loader</h1>
        <p className="text-lg mt-4">
          Fondly nicknamed “the launcher”, the Loader ensures users that
          progress is happening so they don't give up and leave the rocket page.
        </p>
        <p className="text-lg mt-4">
          The Loader, along with a succinct message, is especially important
          after a user initiates an action that requires them to wait. This is
          so that they know there's no need to repeat what they've done.
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
          title="Colours"
          preview={<Colours />}
          code={examples ? examples.Colours : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Sizes"
          preview={<Sizes />}
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props"
        data={[
          {
            name: 'color',
            type: 'ColorProps',
            required: false,
            default: 'bulma',
            description: 'Colour of Loader',
          },
          {
            name: 'size',
            type: 'twoxsmall | xsmall | small | medium | large',
            required: false,
            default: 'medium',
            description: 'Size of Loader',
          },
        ]}
      />
    </>
  );
};

export default PageLoader;
