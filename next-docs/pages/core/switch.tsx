import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';

import DefaultCode from '../../public/examples/switchTW/codeExamples/DefaultCode';
import Custom from '../../public/examples/switchTW/Custom';
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
      <ComponentPageDescription title="Select">
        <p>
          Select components are used for collecting user provided information
          from a list of options.
        </p>
        <p>
          Select has 3 sizes with a different views: <b>md</b> (by default),
          <b>lg</b> and <b>xl</b>.
        </p>
        <p>
          <b>md</b> and <b>lg</b> size has label outside input, <b>xl</b> has
          label inside the input.
        </p>
        <p>
          The width of select by default 100%, and should be controlled by the
          parent container width.
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
        title="Custom width and background color"
        preview={<Custom />}
        code={examples ? examples.Custom : 'Loading'}
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
            name: 'bgColor',
            type: 'string',
            required: false,
            default: '_',
            description: 'Tailwind class for custom container background color',
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

      <Preview
        title="Code exemples for full cistomization"
        preview={<SizesCode />}
        code={examplesCode ? examplesCode.Sizes : 'Loading'}
      />
      <Preview
        title="Code exemples with icons for full cistomization "
        preview={<SizesWithIconsCode />}
        code={examplesCode ? examplesCode.SizesWithIcons : 'Loading'}
      />
    </>
  );
};

export default Example;
