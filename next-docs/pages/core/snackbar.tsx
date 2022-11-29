import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import AutoClose from '../../public/examples/snackbarTW/AutoClose';
import Customization from '../../public/examples/snackbarTW/Customization';
import Default from '../../public/examples/snackbarTW/Default';
import Options from '../../public/examples/snackbarTW/Options';
import Positions from '../../public/examples/snackbarTW/Positions';
import Semantics from '../../public/examples/snackbarTW/Semantics';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('snackbarTW');
  return (
    <>
      <ComponentPageDescription
        title="Snackbar"
        isInProgress
        isRtlSupport
        isAriaSupport
      >
        <p>
          A type of alert which appears in a layer above other content, visually
          similar to a mobile or desktop push notification.
        </p>
        <p>
          Based on{' '}
          <a
            href="https://www.radix-ui.com/"
            className="transition-colors underline hover:text-piccolo"
            target="_blank"
            rel="noreferrer"
          >
            Radix
          </a>
          .
        </p>
      </ComponentPageDescription>
      <ComponentAnatomy>
        {`<Snackbar>
  <Snackbar.Icon>...</Snackbar.Icon>
  <Snackbar.Content>
    <Snackbar.Header>...</Snackbar.Header>
    <Snackbar.Message>...</Snackbar.Message>
  </Snackbar.Content>
  <Snackbar.Close />
</Snackbar>`}
      </ComponentAnatomy>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Positions"
        preview={<Positions />}
        code={examples ? examples.Positions : 'Loading'}
      />
      <Preview
        title="Options"
        preview={<Options />}
        code={examples ? examples.Options : 'Loading'}
      />
      <Preview
        title="Semantic types"
        preview={<Semantics />}
        code={examples ? examples.Semantics : 'Loading'}
      />
      <Preview
        title="Auto close"
        preview={<AutoClose />}
        code={examples ? examples.AutoClose : 'Loading'}
      />
      <Preview
        title="Customization"
        preview={<Customization />}
        code={examples ? examples.Customization : 'Loading'}
      />
      <PropsTable
        title="Snackbar props"
        data={[
          {
            name: 'autoClose',
            type: 'number',
            required: false,
            default: 5000,
            description: 'Duration the snackbar takes in ms.',
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
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
          {
            name: 'isOpen',
            type: 'boolean',
            required: true,
            default: 'false',
            description: 'Toggles visibility of Snackbar',
          },
          {
            name: 'position',
            type: 'top-left | top-center | top-right | bottom-left | bottom-center | bottom-right',
            required: false,
            default: 'top-right',
            description: 'Position of snackbar',
          },
          {
            name: 'setSnackbar',
            type: '() => void',
            required: true,
            default: '-',
            description:
              'Event handler called when the open state of the dialog changes',
          },
        ]}
      />
      <PropsTable
        title="Snackbar.Content props"
        data={[
          {
            name: 'children',
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Children content',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
        ]}
      />
      <PropsTable
        title="Snackbar.Header props"
        data={[
          {
            name: 'children',
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Children content',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
        ]}
      />
      <PropsTable
        title="Snackbar.Message props"
        data={[
          {
            name: 'children',
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Children content',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
        ]}
      />
      <PropsTable
        title="Snackbar.Icon props"
        data={[
          {
            name: 'children',
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Children content',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
        ]}
      />
      <PropsTable
        title="Snackbar.Close props"
        data={[
          {
            name: 'ariaLabel',
            type: 'string',
            required: false,
            default: 'Close',
            description: 'Aria-label for close button',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
        ]}
      />
    </>
  );
};

export default Example;
