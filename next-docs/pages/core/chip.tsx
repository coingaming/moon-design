import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Active from '../../public/examples/chipTW/Active';
import Icons from '../../public/examples/chipTW/Icons';
import IsStroke from '../../public/examples/chipTW/IsStroke';
import IsStrokeIcons from '../../public/examples/chipTW/IsStrokeIcons';
import Sizes from '../../public/examples/chipTW/Sizes';
import Variants from '../../public/examples/chipTW/Variants';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('chipTW');
  return (
    <>
      <ComponentPageDescription title="Chip">
        <p>
          Chips are compact little units that represent actions, filters or
          choices. When shown, they allow users to prompt actions, filter
          games/content and choose options. We use three types of chips in the
          Moon:
        </p>
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
      </ComponentPageDescription>
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Variants"
        preview={<Variants />}
        code={examples ? examples.Variants : 'Loading'}
      />
      <Preview
        title="Active"
        preview={<Active />}
        code={examples ? examples.Active : 'Loading'}
      />
      <Preview
        title="Icons"
        preview={<Icons />}
        code={examples ? examples.Icons : 'Loading'}
      />
      <Preview
        title="Is Stroke"
        preview={<IsStroke />}
        code={examples ? examples.IsStroke : 'Loading'}
      />
      <Preview
        title="Is Stroke with Icons"
        preview={<IsStrokeIcons />}
        code={examples ? examples.IsStrokeIcons : 'Loading'}
      />
    </>
  );
};

export default Example;
