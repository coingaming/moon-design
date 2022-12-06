import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import CustomHeight from '../../public/examples/bottomSheetTW/CustomHeight';
import Default from '../../public/examples/bottomSheetTW/Default';
import LargeWithOptionalExtras from '../../public/examples/bottomSheetTW/LargeWithOptionalExtras';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('bottomSheetTW');
  return (
    <>
      <ComponentPageDescription title="BottomSheet" isInProgress>
        <p>
          A Bottom sheet is an interface element that appears over other
          content. It requires an interaction from the user before they can
          return to whatever is underneath. It is different from a modal in that
          it's always anchored to the bottom of the viewport and can be slid
          away downwards to collapse it. It is designed for small mobile
          screens.
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
        title="BottomSheet"
        data={[
          {
            name: 'open',
            type: 'boolean',
            required: true,
            default: '-',
            description: 'Whether the BottomSheet is open or not.',
          },
          {
            name: 'onClose',
            type: '() => void',
            required: true,
            default: '-',
            description: 'Called when the BottomSheet is dismissed.',
          },
          {
            name: 'hasShadow',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Whether the BottomSheet has a shadow or not.',
          },
          {
            name: 'size',
            type: 'string',
            required: false,
            default: 'sm',
            description:
              'The size of the BottomSheet, sm, md, lg or custom pixel/percentage/rem value.',
          },
        ]}
      />
      <PropsTable
        title="BottomSheet.Draghandle"
        data={[
          {
            name: 'children',
            type: 'BottomSheet.Draghandle',
            required: false,
            default: '-',
            description:
              'Optional title as a child to render text next to the drag handle.',
          },
        ]}
      />
      <PropsTable
        title="BottomSheet.Title"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description:
              'Tailwind classes for customization of BottomSheet Title.',
          },
        ]}
      />
      <PropsTable
        title="BottomSheet.Panel"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description:
              'Tailwind classes for customization of BottomSheet Panel.',
          },
        ]}
      />
      <PropsTable
        title="BottomSheet.Backdrop"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description:
              'Tailwind classes for customization of BottomSheet Backdrop.',
          },
        ]}
      />
    </>
  );
};

export default Example;
