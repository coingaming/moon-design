import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import PropsTable from '../../components/PropsTable';
import Active from '../../public/examples/chip/Active';
import Icons from '../../public/examples/chip/Icons';
import IconsWithStroke from '../../public/examples/chip/IconsWithStroke';
import Sizes from '../../public/examples/chip/Sizes';
import Stroke from '../../public/examples/chip/Stroke';
import useExamples from '../../utils/useExamples';

const PageChip = () => {
  const examples = useExamples('chip');
  return (
    <>
      <ComponentPageDescription title="Chip">
        <DeprecationWarning href="/core/chip" name="Chip" />
        <p>
          Chips are compact little units that represent actions, filters or
          choices. When shown, they allow users to prompt actions, filter
          games/content and choose options. We use three types of chips in the
          Moon:
        </p>
        <div className="flex flex-col gap-2">
          <p>
            <p className="font-medium">Action chip</p>
            Action chips prompt actions related to the game/content.
          </p>
          <p>
            <p className="font-medium">Filter chip</p>
            Filter chips let users sieve through large categories.
          </p>
          <p>
            <p className="font-medium">Selection chip</p>
            Selection chips allow users to select options that matter to them.
          </p>
        </div>
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
