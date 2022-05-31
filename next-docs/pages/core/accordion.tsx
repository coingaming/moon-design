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
          isGrayBg
          preview={<Default />}
          code={examples ? examples.DefaultTW : 'Loading'}
        />
      </section>

      <section className="mt-8 text-3xl font-bold">
        <Preview
          title="Open by default"
          isGrayBg
          preview={<OpenDefault />}
          code={examples ? examples.OpenDefaultTW : 'Loading'}
        />
      </section>

      <section className="mt-8 text-3xl font-bold">
        <Preview
          title="Without button"
          isGrayBg
          preview={<WithoutButton />}
          code={examples ? examples.WithoutButtonTW : 'Loading'}
        />
      </section>

      <section className="mt-8 text-3xl font-bold">
        <Preview
          title="Disable open"
          isGrayBg
          preview={<Disabled />}
          code={examples ? examples.DisabledTW : 'Loading'}
        />
      </section>

      <section className="mt-8 text-3xl font-bold">
        <Preview
          title="Content outside"
          isGrayBg
          preview={<ContentOutside />}
          code={examples ? examples.ContentOutsideTW : 'Loading'}
        />
      </section>

      <section className="mt-8 text-3xl font-bold">
        <Preview
          title="Header content"
          isGrayBg
          preview={<ContentHeader />}
          code={examples ? examples.ContentHeaderTW : 'Loading'}
        />
      </section>

      <section className="mt-8 text-3xl font-bold">
        <Preview
          title="Sizes"
          isGrayBg
          preview={<Sizes />}
          code={examples ? examples.SizesTW : 'Loading'}
        />
      </section>

      <section className="mt-8 text-3xl font-bold">
        <Preview
          title="Sizes: content outside"
          isGrayBg
          preview={<ContentOutsideSizes />}
          code={examples ? examples.ContentOutsideSizesTW : 'Loading'}
        />
      </section>
    </div>
  );
};

export default Example;
