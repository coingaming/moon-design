import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import PropsTable from '../../components/PropsTable';
import Animations from '../../public/examples/button/Animations';
import Disabled from '../../public/examples/button/Disabled';
import FullWidth from '../../public/examples/button/FullWidth';
import Icons from '../../public/examples/button/Icons';
import Sizes from '../../public/examples/button/Sizes';
import Variants from '../../public/examples/button/Variants';
import useExamples from '../../utils/useExamples';

const PageButton = () => {
  const examples = useExamples('button');
  return (
    <>
      <ComponentPageDescription title="Button">
        <DeprecationWarning href="/core/button" name="Button" />
        <p>
          Buttons are calls-to-action used to prompt users. They encourage users
          to interact with us in multiple ways throughout our galaxy, based on
          what the label of the button indicates.
        </p>
        <p>
          Buttons are clickable elements with label text that describe the
          action that will happen when the users interact with it.
        </p>
      </ComponentPageDescription>
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
        title="Props"
        data={[
          {
            name: 'variant',
            type: 'primary | secondary | tertiary | ghost',
            required: false,
            default: 'primary',
            description: 'Visual/Logical variant of Button',
          },
          {
            name: 'size',
            type: 'small | medium | large | xlarge',
            required: false,
            default: 'medium',
            description: 'Size of Button',
          },
          {
            name: 'iconLeft',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description: 'Left icon element',
          },
          {
            name: 'iconRight',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description: 'Right icon element',
          },
          {
            name: 'iconOnly',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description: 'Icon only element',
          },
          {
            name: 'fullWidth',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Full width Button',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Disabled Button',
          },
          {
            name: 'animation',
            type: 'progress | success | error | pulse',
            required: false,
            default: '-',
            description: 'Animation of Button',
          },
        ]}
      />
    </>
  );
};

export default PageButton;
