import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import PropsTable from '../../components/PropsTable';
import Active from '../../public/styledExamples/chip/Active';
import Icons from '../../public/styledExamples/chip/Icons';
import IconsWithStroke from '../../public/styledExamples/chip/IconsWithStroke';
import Sizes from '../../public/styledExamples/chip/Sizes';
import Stroke from '../../public/styledExamples/chip/Stroke';
import useExamples from '../../utils/useExamples';

const PageChip = () => {
  const examples = useExamples('chip', 'styled');
  return (
    <>
      <ComponentPageDescription title="Chip" isDeprecated>
        <DeprecationWarning href="/components/chip" name="Chip" />
      </ComponentPageDescription>
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Active State"
        preview={<Active />}
        code={examples ? examples.Active : 'Loading'}
      />
      <Preview
        title="IsStroke"
        preview={<Stroke />}
        code={examples ? examples.Stroke : 'Loading'}
      />
      <Preview
        title="Icons"
        preview={<Icons />}
        code={examples ? examples.Icons : 'Loading'}
      />
      <Preview
        title="Icons with isStroke"
        preview={<IconsWithStroke />}
        code={examples ? examples.IconsWithStroke : 'Loading'}
      />
      <PropsTable
        title="Props"
        data={[
          {
            name: 'size',
            type: 'small | medium',
            required: false,
            default: 'medium',
            description: 'Size of Chip',
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
            name: 'isActive',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Active state',
          },
          {
            name: 'isStroke',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Show stroke on hover/active',
          },
        ]}
      />
    </>
  );
};

export default PageChip;
