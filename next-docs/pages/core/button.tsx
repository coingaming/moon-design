import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Animations from '../../public/examples/buttonTW/Animations';
import AsLink from '../../public/examples/buttonTW/AsLink';
import Default from '../../public/examples/buttonTW/Default';
import Disabled from '../../public/examples/buttonTW/Disabled';
import FullWidth from '../../public/examples/buttonTW/FullWidth';
import Icons from '../../public/examples/buttonTW/Icons';
import Sizes from '../../public/examples/buttonTW/Sizes';
import Variants from '../../public/examples/buttonTW/Variants';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('buttonTW');
  return (
    <>
      <ComponentPageDescription title="Button">
        <p>
          Buttons are calls-to-action used to prompt users. They encourage users
          to interact with us in multiple ways throughout our galaxy, based on
          what the label of the button indicates. Buttons are clickable elements
          with label text that describe the action that will happen when the
          users interact with it.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Button as a link HTML element"
        preview={<AsLink />}
        code={examples ? examples.AsLink : 'Loading'}
      />
      <Preview
        title="Variants"
        preview={<Variants />}
        code={examples ? examples.Variants : 'Loading'}
      />
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Icons"
        preview={<Icons />}
        code={examples ? examples.Icons : 'Loading'}
      />
      <Preview
        title="Full width"
        preview={<FullWidth />}
        code={examples ? examples.FullWidth : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<Disabled />}
        code={examples ? examples.Disabled : 'Loading'}
      />
      <Preview
        title="Animations"
        preview={<Animations />}
        code={examples ? examples.Animations : 'Loading'}
      />
      <PropsTable
        title="Button props"
        data={[
          {
            name: 'animation',
            type: 'progress | success | error | pulse',
            required: false,
            default: '-',
            description: 'Animation of button',
          },
          {
            name: 'as',
            type: 'a | button',
            required: false,
            default: 'button',
            description: 'Rendered HTML element',
          },
          {
            name: 'children',
            type: 'React.ReactNode;',
            required: false,
            default: '-',
            description: 'Children content',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Disabled button',
          },
          {
            name: 'fullWidth',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Full width button',
          },
          {
            name: 'icon',
            type: 'left | right | only',
            required: false,
            default: '-',
            description: 'Button sizing based on icon',
          },
          {
            name: 'iconLeft',
            type: 'JSX.Element | boolean',
            required: false,
            default: '-',
            description: 'Left icon',
          },
          {
            name: 'iconOnly',
            type: 'JSX.Element | boolean',
            required: false,
            default: '-',
            description: 'Icon without text',
          },
          {
            name: 'iconRight',
            type: 'JSX.Element | boolean',
            required: false,
            default: '-',
            description: 'Right icon',
          },
          {
            name: 'size',
            type: 'xs | sm | md | lg | xl',
            required: false,
            default: 'md',
            description: 'Size of button',
          },
          {
            name: 'variant',
            type: 'primary | secondary | tertiary | ghost',
            required: false,
            default: 'primary',
            description: 'Visual/Logical variant of button',
          },
        ]}
      />
    </>
  );
};

export default Example;
