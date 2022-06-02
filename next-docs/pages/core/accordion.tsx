import Preview from '../../components/codePreview/Preview';
import ContentHeader from '../../public/examples/accordionTW/ContentHeader';
import ContentOutside from '../../public/examples/accordionTW/ContentOutside';
import ContentOutsideSizes from '../../public/examples/accordionTW/ContentOutsideSizes';
import Default from '../../public/examples/accordionTW/Default';
import Disabled from '../../public/examples/accordionTW/Disabled';
import OpenDefault from '../../public/examples/accordionTW/OpenDefault';
import Sizes from '../../public/examples/accordionTW/Sizes';
import WithoutButton from '../../public/examples/accordionTW/WithoutButton';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('accordionTW');

  return (
    <div className="theme-moon-dark">
      <section className="mt-8 text-3xl font-bold">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-8 text-3xl font-bold">
        <Preview
          title="Open by default"
          preview={<OpenDefault />}
          code={examples ? examples.OpenDefault : 'Loading'}
        />
      </section>

      <section className="mt-8 text-3xl font-bold">
        <Preview
          title="Without button"
          preview={<WithoutButton />}
          code={examples ? examples.WithoutButton : 'Loading'}
        />
      </section>

      <section className="mt-8 text-3xl font-bold">
        <Preview
          title="Disable open"
          preview={<Disabled />}
          code={examples ? examples.Disabled : 'Loading'}
        />
      </section>

      <section className="mt-8 text-3xl font-bold">
        <Preview
          title="Content outside"
          preview={<ContentOutside />}
          code={examples ? examples.ContentOutside : 'Loading'}
        />
      </section>

      <section className="mt-8 text-3xl font-bold">
        <Preview
          title="Header content"
          preview={<ContentHeader />}
          code={examples ? examples.ContentHeader : 'Loading'}
        />
      </section>

      <section className="mt-8 text-3xl font-bold">
        <Preview
          title="Sizes"
          preview={<Sizes />}
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>

      <section className="mt-8 text-3xl font-bold">
        <Preview
          title="Sizes: content outside"
          preview={<ContentOutsideSizes />}
          code={examples ? examples.ContentOutsideSizes : 'Loading'}
        />
      </section>
    </div>
  );
};

export default Example;
