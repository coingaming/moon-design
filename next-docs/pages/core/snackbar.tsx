import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/snackbarTW/Default';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('menuItemTW');
  return (
    <>
      <ComponentPageDescription title="Snackbar">
        <p>
        A type of alert which appears in a layer above other content, visually similar to a mobile or desktop push notification.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <PropsTable
        title="MenuItem props"
        data={[
          {
            name: 'as',
            type: 'a | button',
            required: false,
            default: 'button',
            description: 'Rendered HTML element',
          },
          {
            name: 'isActive',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'Is MenuItem checked/unchecked. For radio and checkbox variant.',
          },
        ]}
      />
    </>
  );
};

export default Example;
