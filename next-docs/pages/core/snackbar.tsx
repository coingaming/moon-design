import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/snackbarTW/Default';
import Positions from '../../public/examples/snackbarTW/Positions';
import Types from '../../public/examples/snackbarTW/Types';
import Variants from '../../public/examples/snackbarTW/Variants';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('snackbarTW');
  return (
    <>
      <ComponentPageDescription title="Snackbar" isInProgress>
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
        title="Snackbar positions"
        preview={<Positions />}
        code={examples ? examples.Positions : 'Loading'}
      />
      <Preview
        title="Snackbar types"
        preview={<Types />}
        code={examples ? examples.Types : 'Loading'}
      />
      <Preview
        title="Snackbar variants"
        preview={<Variants />}
        code={examples ? examples.Variants : 'Loading'}
      />
      <PropsTable
        title="Snackbar props"
        data={[
          {
            name: 'autoClose',
            type: 'number',
            required: false,
            default: 6000,
            description: 'Change the duration the snackbar takes',
          },
          {
            name: 'children',
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Children content',
          },
          {
            name: 'className',
            type: 'Tailwind classes',
            required: false,
            default: '-',
            description: 'Change the styles',
          },
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
          {
            name: 'position',
            required: true,
            type: 'top-left | top-center | top-right | bottom-left | bottom-center | bottom-right',
            default: 'top-right',
            description: 'Change the position of snackbar',
          },
        ]}
      />
    </>
  );
};

export default Example;
