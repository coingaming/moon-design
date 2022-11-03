import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/modalTW/Default';
import Real from '../../public/examples/modalTW/Real';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('modalTW');
  return (
    <>
      <ComponentPageDescription title="Modal">
        <p>
          A modal is an interface element that appears over other content. It
          requires an interaction from the user before they can return to
          whatever is underneath.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Exemple with styled content"
        preview={<Real />}
        code={examples ? examples.Real : 'Loading'}
      />
      <PropsTable
        title="Modal props"
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
