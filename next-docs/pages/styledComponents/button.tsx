import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import PropsTable from '../../components/PropsTable';
import Animations from '../../public/styledExamples/button/Animations';
import Disabled from '../../public/styledExamples/button/Disabled';
import FullWidth from '../../public/styledExamples/button/FullWidth';
import Icons from '../../public/styledExamples/button/Icons';
import Sizes from '../../public/styledExamples/button/Sizes';
import Variants from '../../public/styledExamples/button/Variants';
import useExamples from '../../utils/useExamples';

const PageButton = () => {
  const examples = useExamples('button', 'styled');
  return (
    <>
      <ComponentPageDescription title="Button" isDeprecated>
        <DeprecationWarning href="/components/button" name="Button" />
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
