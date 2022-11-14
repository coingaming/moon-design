import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/popoverTW/Default';
import Position from '../../public/examples/popoverTW/Position';
import WithClose from '../../public/examples/popoverTW/WithClose';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('popoverTW');
  return (
    <>
      <ComponentPageDescription title="Dropdown">
        <p>
          Popovers are perfect for floating panels with arbitrary content like
          navigation menus, mobile menus and flyout menus
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />

      <Preview
        title="Position"
        description="The complete list of all possible positions is in the props table below."
        preview={<Position />}
        code={examples ? examples.Position : 'Loading'}
      />

      <Preview
        title="WithClose"
        preview={<WithClose />}
        code={examples ? examples.WithClose : 'Loading'}
      />

      <PropsTable
        title="Popover"
        data={[
          {
            name: 'position',
            type: 'top-start | top-end | bottom-start | bottom-end | right-start | right-end \n\n | left-start| left-end | top | bottom | right| left',
            required: false,
            default: 'bottom',
            description: 'Set placement for popover',
          },
          {
            name: 'Render Props: ',
            type: '',
            required: undefined,
            default: '',
            description: '',
          },
          {
            name: 'open',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Whether or not the popover is open.',
          },
        ]}
      />

      <PropsTable
        title="Popover.Panel"
        data={[
          {
            name: 'menuWidth',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind class for custom options container width.',
          },
          {
            name: 'Render Props: ',
            type: '',
            required: undefined,
            default: '',
            description: '',
          },
          {
            name: 'open',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Whether or not the popover is open.',
          },
          {
            name: 'close',
            type: '() => void',
            required: false,
            default: '-',
            description: 'Closes the popover.',
          },
        ]}
      />
    </>
  );
};

export default Example;
