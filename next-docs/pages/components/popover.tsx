import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import type { ComponentNames } from '../../components/getComponent';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/popover/Default';
import Position from '../../public/examples/popover/Position';
import TooltipView from '../../public/examples/popover/TooltipView';
import TooltipViewOpen from '../../public/examples/popover/TooltipViewOpen';
import TriggerElements from '../../public/examples/popover/TriggerElements';
import WithClose from '../../public/examples/popover/WithClose';
import useComponent from '../../utils/useComponent';

const COMPONENT_NAME: ComponentNames = 'Popover';

const PagePopover = () => {
  const { examples, name, text, image } = useComponent(COMPONENT_NAME);
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isAriaSupport
        isRtlSupport
      >
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

      <Preview
        title="Tooltip view example"
        preview={<TooltipView />}
        code={examples ? examples.TooltipView : 'Loading'}
      />

      <Preview
        title="Tooltip view example with always open state"
        preview={<TooltipViewOpen />}
        code={examples ? examples.TooltipView : 'Loading'}
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
            name: 'isStatic',
            type: 'boolean',
            required: false,
            default: '-',
            description:
              'Whether the component should be always open and ignore the internally managed open/closed state.',
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

PagePopover.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PagePopover;
