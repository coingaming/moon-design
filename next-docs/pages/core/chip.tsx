import Preview from '../../components/codePreview/Preview';
import Active from '../../public/examples/chipTW/Active';
import Icons from '../../public/examples/chipTW/Icons';
import IsStroke from '../../public/examples/chipTW/IsStroke';
import IsStrokeIcons from '../../public/examples/chipTW/IsStrokeIcons';
import Sizes from '../../public/examples/chipTW/Sizes';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('chipTW');

  return (
    <div className="theme-moon-dark">
      <section className="mt-8">
        <Preview
          title="Sizes"
          isGrayBg
          preview={<Sizes />}
          code={examples ? examples.SizesTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Active"
          isGrayBg
          preview={<Active />}
          code={examples ? examples.ActiveTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Icons"
          isGrayBg
          preview={<Icons />}
          code={examples ? examples.IconsTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Is Stroke"
          isGrayBg
          preview={<IsStroke />}
          code={examples ? examples.IsStrokeTW : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Is Stroke with Icons"
          isGrayBg
          preview={<IsStrokeIcons />}
          code={examples ? examples.IsStrokeIconsTW : 'Loading'}
        />
      </section>
    </div>
  );
};

export default Example;
