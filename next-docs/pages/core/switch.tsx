import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';

import DefaultCode from '../../public/examples/switchTW/codeExamples/DefaultCode';
import CustomBg from '../../public/examples/switchTW/CustomBg';
import Default from '../../public/examples/switchTW/Default';
import Disabled from '../../public/examples/switchTW/Disabled';
import Form from '../../public/examples/switchTW/Form';
import Sizes from '../../public/examples/switchTW/Sizes';
import WithIcons from '../../public/examples/switchTW/WithIcons';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('switchTw');
  const examplesCode = useExamples('switchTw/codeExamples');
  return (
    <>
      <ComponentPageDescription title="Switch">
        <p>
          Switch is a control that is used to quickly switch between two
          possible states. Switches are only used for these binary actions that
          occur immediately after the user “flips” the switch. They are commonly
          used for “on/off” switches.
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
        title="Custom background colour"
        preview={<CustomBg />}
        code={examples ? examples.CustomBg : 'Loading'}
      />
      <Preview
        title="Using with HTML forms"
        preview={<Form />}
        code={examples ? examples.Form : 'Loading'}
      />
      <Preview
        title="Code exemples for full cistomization"
        preview={<DefaultCode />}
        code={examplesCode ? examplesCode.DefaultCode : 'Loading'}
      />
      <PropsTable
        title="Props"
        data={[
          {
            name: 'id',
            type: 'string',
            required: false,
            default: '_',
            description: `Unique element's identifier.`,
          },
          {
            name: 'size',
            type: '2xs | xs | sm',
            required: false,
            default: 'sm',
            description: `The option's value.`,
          },
          {
            name: 'checked',
            type: 'boolean',
            required: false,
            default: 'false',
            description: `Is switch checked/unchecked.`,
          },
          {
            name: 'onChange',
            type: '(data: boolean) => void',
            required: false,
            default: '-',
            description: `The function to call when the switch is toggled.`,
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
            name: 'value',
            type: 'string',
            required: false,
            default: '-',
            description:
              'The value used when using this component inside a form, if it is checked.',
          },
          {
            name: 'twWidth',
            type: 'string',
            required: false,
            default: '_',
            description: 'Tailwind class for custom container width',
          },
          {
            name: 'onBgColor',
            type: 'string',
            required: false,
            default: 'bg-piccolo',
            description: 'Tailwind class for custom on-state background color',
          },
          {
            name: 'offBgColor',
            type: 'string',
            required: false,
            default: 'bg-beerus',
            description: 'Tailwind class for custom off-state background color',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: '_',
            description: 'Set disabled/not disabled switch',
          },
          {
            name: 'onIcon',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Set icon for checked state',
          },
          {
            name: 'offIcon',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Set icon for unchecked state',
          },
        ]}
      />
    </>
  );
};

export default Example;
