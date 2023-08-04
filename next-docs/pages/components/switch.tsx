import { ReactNode } from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import Customization from '../../public/examples/switch/Customization';
import Default from '../../public/examples/switch/Default';
import Disabled from '../../public/examples/switch/Disabled';
import Form from '../../public/examples/switch/Form';
import Sizes from '../../public/examples/switch/Sizes';
import WithIcons from '../../public/examples/switch/WithIcons';
import WithTooltip from '../../public/examples/switch/WithTooltip';
import useComponent from '../../utils/useComponent';
import type { ComponentNames } from '../../components/getComponent';

const COMPONENT_NAME: ComponentNames = 'Switch';

const PageSwitch = () => {
  const { examples, name, text, image } = useComponent(COMPONENT_NAME);
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isRtlSupport
        isAriaSupport
      >
        <p>{text}</p>
        <p>
          Switches are only used for these binary actions that occur immediately
          after the user “flips” the switch.
        </p>
        <p>They are commonly used for “on/off” switches.</p>
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
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<Disabled />}
        code={examples ? examples.Disabled : 'Loading'}
      />
      <Preview
        title="With icons"
        preview={<WithIcons />}
        code={examples ? examples.WithIcons : 'Loading'}
      />
      <Preview
        title="Customization"
        preview={<Customization />}
        code={examples ? examples.Customization : 'Loading'}
      />
      <Preview
        title="Using with HTML forms"
        preview={<Form />}
        code={examples ? examples.Form : 'Loading'}
      />
      <Preview
        title="Using with Tooltip"
        preview={<WithTooltip />}
        code={examples ? examples.WithTooltip : 'Loading'}
      />
      <PropsTable
        title="Switch props"
        data={[
          {
            name: 'checked',
            type: 'boolean',
            required: false,
            default: 'false',
            description: `Is switch checked/unchecked.`,
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: '_',
            description: 'Set disabled/not disabled switch',
          },
          {
            name: 'name',
            type: 'string',
            required: false,
            default: '-',
            description:
              'The name used when using this component inside a form.',
          },
          {
            name: 'offIcon',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Set icon for unchecked state',
          },
          {
            name: 'onChange',
            type: '(data) => void',
            required: false,
            default: '-',
            description: `The function to call when the switch is toggled.`,
          },
          {
            name: 'onIcon',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Set icon for checked state',
          },
          {
            name: 'size',
            type: '2xs | xs | sm',
            required: false,
            default: 'sm',
            description: `The option's value.`,
          },
          {
            name: 'value',
            type: 'string',
            required: false,
            default: '-',
            description:
              'The value used when using this component inside a form, if it is checked.',
          },
        ]}
      />
    </>
  );
};

PageSwitch.getLayout = function getLayout(page: ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageSwitch;
