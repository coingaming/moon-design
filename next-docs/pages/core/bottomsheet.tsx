import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import CustomHeight from '../../public/examples/bottomsheetTW/CustomHeight';
import Default from '../../public/examples/bottomsheetTW/Default';
import LargeWithOptionalExtras from '../../public/examples/bottomsheetTW/LargeWithOptionalExtras';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('bottomsheetTW');
  return (
    <>
      <ComponentPageDescription title="Bottomsheet" isInProgress>
        <p>
          A Bottomsheet is an interface element that appears over other content.
          It requires an interaction from the user before they can return to
          whatever is underneath. It is different from a modal in that it's
          always anchored to the bottom of the viewport and can be slid away
          downwards to collapse it. It is designed for small mobile screens.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Large with all optional extras"
        preview={<LargeWithOptionalExtras />}
        code={examples ? examples.LargeWithOptionalExtras : 'Loading'}
      />
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Custom height"
        preview={<CustomHeight />}
        code={examples ? examples.CustomHeight : 'Loading'}
      />
      <PropsTable
        title="Bottomsheet"
        data={[
          {
            name: 'open',
            type: 'boolean',
            required: true,
            default: '-',
            description: 'Whether the Bottomsheet is open or not.',
          },
          {
            name: 'onClose',
            type: '() => void',
            required: true,
            default: '-',
            description: 'Called when the Bottomsheet is dismissed.',
          },
          {
            name: 'hasShadow',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Whether the Bottomsheet has a shadow or not.',
          },
          {
            name: 'size',
            type: 'string',
            required: false,
            default: 'sm',
            description:
              'The size of the Bottomsheet, sm, md, lg or custom pixel/percentage/rem value.',
          },
        ]}
      />
      <PropsTable
        title="Bottomsheet.Title"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description:
              'Tailwind classes for customization of Bottomsheet Title.',
          },
        ]}
      />
      <PropsTable
        title="Bottomsheet.Panel"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description:
              'Tailwind classes for customization of Bottomsheet Panel.',
          },
        ]}
      />
      <PropsTable
        title="Bottomsheet.Backdrop"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description:
              'Tailwind classes for customization of Bottomsheet Backdrop.',
          },
        ]}
      />
    </>
  );
};

export default Example;
