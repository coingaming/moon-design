import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Colors from '../../public/examples/loaderTW/Colors';
import Default from '../../public/examples/loaderTW/Default';
import Sizes from '../../public/examples/loaderTW/Sizes';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('loaderTW');
  return (
    <>
      <ComponentPageDescription title="Loader" isInProgress>
        <p>
          Loaders provide a visual cue that an action is processing awaiting a
          course of change or a result.
        </p>
      </ComponentPageDescription>
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
      <PropsTable
        title="Loader props"
        data={[
          {
            name: 'color',
            type: 'string',
            required: 'false',
            default: 'border-hit',
            description: 'Colour of loader',
          },
          {
            name: 'size',
            type: '2xs | xs | sm | md | lg',
            required: 'false',
            default: 'md',
            description: 'Size of loader',
          },
        ]}
      />
    </>
  );
};

export default Example;
