import React from 'react';
import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/searchModal/Default';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('searchModal');
  return (
    <>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />

      <PropsTable
        title="Search Modal props"
        data={[
          {
            name: 'onChangeSearch Test',
            type: '(value: string) => void',
            required: true,
            default: '-',
            description: 'Function for setting search value',
          },
        ]}
      />
    </>
  );
};

export default Example;
