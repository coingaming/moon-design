import Preview from '../../components/codePreview/Preview';
import Closed from '../../public/styledExamples/sidebar/Closed';
import Default from '../../public/styledExamples/sidebar/Default';
import Rtl from '../../public/styledExamples/sidebar/Rtl';
import useExamples from '../../utils/useExamples';

export default function PageSidebar() {
  const examples = useExamples('sidebar', 'styled');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-medium">Sidebar</h1>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* Closed */}
      <section className="mt-8">
        <Preview
          title="Initially Closed"
          preview={<Closed />}
          code={examples ? examples.Closed : 'Loading'}
        />
      </section>

      {/* Rtl */}
      <section className="mt-8">
        <Preview
          title="Right to Left (RTL)"
          preview={<Rtl />}
          code={examples ? examples.Rtl : 'Loading'}
        />
      </section>
    </>
  );
}
