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
          preview={<Sizes />}
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Active"
          preview={<Active />}
          code={examples ? examples.Active : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Icons"
          preview={<Icons />}
          code={examples ? examples.Icons : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Is Stroke"
          preview={<IsStroke />}
          code={examples ? examples.IsStroke : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Is Stroke with Icons"
          preview={<IsStrokeIcons />}
          code={examples ? examples.IsStrokeIcons : 'Loading'}
        />
      </section>
    </div>
  );
};

export default Example;
