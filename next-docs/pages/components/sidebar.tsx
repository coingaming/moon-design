import Preview from '../../components/codePreview/Preview';
import Default from '../../public/examples/sidebar/Default';
import useExamples from '../../utils/useExamples';

export default function PageSidebar() {
  const examples = useExamples('sidebar');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Sidebar</h1>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>
    </>
  );
}
