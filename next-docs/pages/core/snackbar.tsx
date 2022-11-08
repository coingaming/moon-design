import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/snackbarTW/Default';
import SnackbarPositions from '../../public/examples/snackbarTW/SnackbarPositions';
import SnackbarTypes from '../../public/examples/snackbarTW/SnackbarTypes';
import SnackbarVariants from '../../public/examples/snackbarTW/SnackbarVariants';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('SnackbarTW');
  return (
    <>
      <ComponentPageDescription title="Snackbar">
        <p>
          A type of alert which appears in a layer above other content, visually
          similar to a mobile or desktop push notification.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Snackbar Positions"
        preview={<SnackbarPositions />}
        code={examples ? examples.SnackbarPositions : 'Loading'}
      />
      <Preview
        title="Snackbar Types"
        preview={<SnackbarTypes />}
        code={examples ? examples.SnackbarTypes : 'Loading'}
      />
      <Preview
        title="Snackbar Variants"
        preview={<SnackbarVariants />}
        code={examples ? examples.SnackbarVariants : 'Loading'}
      />
      <PropsTable
        title="Snackbar props"
        data={[
          {
            name: 'className',
            type: 'Tailwind classes',
            required: false,
            default: '-',
            description: 'Change the styles',
          },
          {
            name: 'children',
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Children content',
          },
          {
            name: 'autoClose',
            type: 'number',
            required: false,
            default: 6000,
            description:
              'Change the duration the snackbar takes',
          },
          {
            name: 'position',
            required: true,
            type: 'top-left | top-center | top-right | bottom-left | bottom-center | bottom-right',
            default: 'top-right',
            description: 'Change the position of snackbar',
          },
        ]}
      />
        <PropsTable
        title="Variant props"
        data={[
          {
            name: 'containerClassName',
            type: 'Tailwind classes',
            required: false,
            default: '-',
            description: 'Change the styles of the icon container',
          },
          {
            name: 'iconClassName',
            type: 'Tailwind classes',
            required: false,
            default: '-',
            description: 'Change the styles of the icon',
          },
        ]}
      />
    </>
  );
};

export default Example;
