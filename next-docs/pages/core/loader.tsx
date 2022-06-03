import React from 'react';
import Preview from '../../components/codePreview/Preview';
import Colors from '../../public/examples/loaderTW/Colors';
import Default from '../../public/examples/loaderTW/Default';
import Sizes from '../../public/examples/loaderTW/Sizes';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('loaderTW');
  return (
    <>
      <h1 className="text-moon-32 font-medium">Loader</h1>
      <div className="flex flex-col gap-2 max-w-screen-sm">
        <p className="text-moon-16">
          Fondly nicknamed “the launcher”, the Loader ensures users that
          progress is happening so they don't give up and leave the rocket page.
        </p>
        <p className="text-moon-16">
          The Loader, along with a succinct message, is especially important
          after a user initiates an action that requires them to wait. This is
          so that they know there's no need to repeat what they've done.
        </p>
        <p className="text-moon-16">Default colour: Hit</p>
      </div>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Colors"
        preview={<Colors />}
        code={examples ? examples.Colors : 'Loading'}
      />
    </>
  );
};

export default Example;
