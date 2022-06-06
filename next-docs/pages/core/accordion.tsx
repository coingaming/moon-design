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
    <>
      <h1 className="text-moon-32 font-medium">Accordion</h1>
      <div className="flex flex-col gap-2 max-w-screen-sm">
        <p className="text-moon-16">
          Like the accordion instrument, our accordion component reveals or
          hides associated sections of content. This is done through the use of
          a vertically stacked list of headers.
        </p>
        <p className="text-moon-16">
          Users can decide which sections to toggle, read and close as the
          header titles will give them a high-level overview of the content
          that's in the space.
        </p>
      </div>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Open by default"
        preview={<OpenDefault />}
        code={examples ? examples.OpenDefault : 'Loading'}
      />
      <Preview
        title="Without button"
        preview={<WithoutButton />}
        code={examples ? examples.WithoutButton : 'Loading'}
      />
      <Preview
        title="Disable open"
        preview={<Disabled />}
        code={examples ? examples.Disabled : 'Loading'}
      />
      <Preview
        title="Content outside"
        preview={<ContentOutside />}
        code={examples ? examples.ContentOutside : 'Loading'}
      />
      <Preview
        title="Header content"
        preview={<ContentHeader />}
        code={examples ? examples.ContentHeader : 'Loading'}
      />
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Sizes: content outside"
        preview={<ContentOutsideSizes />}
        code={examples ? examples.ContentOutsideSizes : 'Loading'}
      />
    </>
  );
};

export default Example;
