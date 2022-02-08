import Preview from '../../components/codePreview/Preview';
import Children from '../../public/examples/reel/Children';
import CustomSpace from '../../public/examples/reel/CustomSpace';
import Default from '../../public/examples/reel/Default';
import Images from '../../public/examples/reel/Images';
import Rtl from '../../public/examples/reel/Rtl';
import useExamples from '../../utils/useExamples';

export default function PageReel() {
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
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* Custom Space */}
      <section className="mt-8">
        <Preview
          title="Custom Space"
          preview={<CustomSpace />}
          code={examples ? examples.CustomSpace : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Child images"
          preview={<Images />}
          code={examples ? examples.Images : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="With Child List"
          preview={<Children />}
          code={examples ? examples.Children : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="RTL"
          preview={<Rtl />}
          code={examples ? examples.Rtl : 'Loading'}
        />
      </section>
    </>
  );
}
