import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Animations from '../../public/examples/button/Animations';
import AsLink from '../../public/examples/button/AsLink';
import Default from '../../public/examples/button/Default';
import Disabled from '../../public/examples/button/Disabled';
import FullWidth from '../../public/examples/button/FullWidth';
import Icons from '../../public/examples/button/Icons';
import Sizes from '../../public/examples/button/Sizes';
import Variants from '../../public/examples/button/Variants';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('button');
  const { name, text, image } = getComponent('Button');
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isInProgress
        isRtlSupport
        isAriaSupport
      >
        <p>{text}</p>
        <p>
          Buttons communicate actions that users can take. They are typically
          placed throughout your UI, in places like:
        </p>
        <ul className="list-disc ps-5">
          <li>Modal windows</li>
          <li>Forms</li>
          <li>Cards</li>
          <li>Toolbars</li>
        </ul>
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
            type: "'progress' | 'success' | 'error' | 'pulse' | boolean",
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
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Children content',
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
            name: 'iconLeft',
            type: 'JSX.Element',
            required: false,
            default: '-',
            description: 'Left icon',
          },
          {
            name: 'iconRight',
            type: 'JSX.Element',
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
