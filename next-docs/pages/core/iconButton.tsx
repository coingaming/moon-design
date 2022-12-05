import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Animations from '../../public/examples/iconButtonTW/Animations';
import AsLink from '../../public/examples/iconButtonTW/AsLink';
import Default from '../../public/examples/iconButtonTW/Default';
import Disabled from '../../public/examples/iconButtonTW/Disabled';
import Sizes from '../../public/examples/iconButtonTW/Sizes';
import Variants from '../../public/examples/iconButtonTW/Variants';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('iconButtonTW');
  return (
    <>
      <ComponentPageDescription title="IconButton" isInProgress isRtlSupport>
        <p>
          Icon buttons are calls-to-action used to prompt users. They encourage
          users to interact with us in multiple ways throughout our galaxy,
          based on what the icon of the button indicates. Icon buttons are
          clickable elements with an icon that describe the action that will
          happen when the users interact with it.
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
            name: 'icon',
            type: 'JSX.Element',
            required: false,
            default: '-',
            description: 'Icon',
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
