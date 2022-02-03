import Preview from '../../components/codePreview/Preview';
import Caption from '../../public/examples/switch/Caption';
import Default from '../../public/examples/switch/Default';
import Sizes from '../../public/examples/switch/Sizes';
import Theme from '../../public/examples/switch/Theme';
import ThemeCaption from '../../public/examples/switch/ThemeCaption';

import useExamples from '../../utils/useExamples';

type Props = {
  isRtl?: boolean;
};

export default function PageSwitch({ isRtl }: Props) {
  const examples = useExamples('switch');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Switch</h1>
        <p className="text-lg mt-4">
          An alternate checkbox appearance for simulating on/off state.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Default isRtl={isRtl} />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* Sizes */}
      <section className="mt-8">
        <Preview
          title="Sizes"
          preview={<Sizes isRtl={isRtl} />}
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Dark &amp; Light mode"
          preview={<Theme isRtl={isRtl} />}
          code={examples ? examples.Theme : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="With captions"
          preview={<Caption isRtl={isRtl} />}
          code={examples ? examples.Caption : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Dark &amp; Light mode with captions"
          preview={<ThemeCaption isRtl={isRtl} />}
          code={examples ? examples.ThemeCaption : 'Loading'}
        />
      </section>
    </>
  );
}
