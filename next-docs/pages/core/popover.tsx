import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/popover/Default';
import Position from '../../public/examples/popover/Position';
import TriggerElements from '../../public/examples/popover/TriggerElements';
import WithClose from '../../public/examples/popover/WithClose';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('popover');
  const { name, text, image } = getComponent('Popover');
  return (
    <>
      <ComponentPageDescription title={name} image={image} isInProgress>
        <p>{text}</p>
        <p>
          Based on{' '}
          <a
            href="https://headlessui.com/"
            className="transition-colors underline hover:text-piccolo"
            target="_blank"
            rel="noreferrer"
          >
            Headless UI
          </a>
          .
        </p>
      </ComponentPageDescription>
      <ComponentAnatomy>
        {`<Popover>
  <Popover.Trigger>...</Popover.Trigger>
  <Popover.Panel>...</Popover.Panel>
</Popover>`}
      </ComponentAnatomy>
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
        title="Trigger elements"
        preview={<TriggerElements />}
        code={examples ? examples.TriggerElements : 'Loading'}
      />

      <Preview
        title="With close button"
        preview={<WithClose />}
        code={examples ? examples.WithClose : 'Loading'}
      />

      <PropsTable
        title="Popover"
        data={[
          {
            name: 'position',
            type: 'top-start | top-end | bottom-start | bottom-end | right-start | right-end | left-start| left-end | top | bottom | right| left',
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
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles.',
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
