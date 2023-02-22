import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Backdrop from '../../public/examples/drawer/Backdrop';
import Close from '../../public/examples/drawer/Close';
import Default from '../../public/examples/drawer/Default';
import Positions from '../../public/examples/drawer/Positions';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('drawer');
  return (
    <>
      <ComponentPageDescription
        title="Drawer"
        isInProgress
        isAriaSupport
        isRtlSupport
      >
        <p>
          The Drawer component is a panel that slides out from the edge of the
          screen. It can be useful when you need users to complete a task or
          view some details without leaving the current page.
        </p>
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
        {`<Drawer>
  <Drawer.Panel>...</Drawer.Panel>
  </Drawer.Backdrop>
</Drawer>`}
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
        title="With Backdrop"
        preview={<Backdrop />}
        code={examples ? examples.Backdrop : 'Loading'}
      />
      <Preview
        title="With Close"
        preview={<Close />}
        code={examples ? examples.Close : 'Loading'}
      />
      <PropsTable
        title="Drawer"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles',
          },
          {
            name: 'open',
            type: 'boolean',
            required: true,
            default: 'false',
            description: 'Whether or not the Drawer is opened',
          },
          {
            name: 'setOpen',
            type: '(value: boolean) => void',
            required: true,
            default: '-',
            description: 'Sets open state of the Drawer',
          },
        ]}
      />
      <PropsTable
        title="Drawer.Panel"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles',
          },
          {
            name: 'position',
            type: 'top | bottom | start | end',
            required: false,
            default: 'end',
            description: 'The Drawer positions on screen',
          },
        ]}
      />
    </>
  );
};

export default Example;
