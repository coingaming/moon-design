import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Background from '../../public/examples/accordionTW/Background';
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
      <ComponentPageDescription
        title="Accordion"
        isInProgress
        isRtlSupport
        isAriaSupport
      >
        <p>
          Like the accordion instrument, our accordion component reveals or
          hides associated sections of content. This is done through the use of
          a vertically stacked list of headers.
        </p>
        <p>
          Users can decide which sections to toggle, read and close as the
          header titles will give them a high-level overview of the content
          that's in the space.
        </p>
      </ComponentPageDescription>
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
        title="Disabled"
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
      <Preview
        title="Custom background"
        preview={<Background />}
        code={examples ? examples.Background : 'Loading'}
      />
      <PropsTable
        title="Accordion props"
        data={[
          {
            name: 'bgColor',
            type: 'string',
            required: false,
            default: 'bg-gohan',
            description: 'Alters background colour of accordion',
          },
          {
            name: 'children',
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Children content',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Disables accordion',
          },
          {
            name: 'headerContent',
            type: 'React.ReactNode',
            required: false,
            default: '-',
            description: 'Additional content to render in accordion header',
          },
          {
            name: 'isContentInside',
            type: 'boolean',
            required: false,
            default: 'true',
            description:
              'Displays content inside of the accordion header block',
          },
          {
            name: 'openByDefault',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Expanded accordion by default',
          },
          {
            name: 'size',
            type: 'sm | md | lg | xl',
            required: false,
            default: 'md',
            description: 'Size of accordion',
          },
          {
            name: 'title',
            type: 'string | React.ReactNode',
            required: true,
            default: '-',
            description: 'Title of accordion',
          },
          {
            name: 'withButton',
            type: 'boolean',
            required: false,
            default: 'true',
            description: 'Toggles expand/collapse arrow',
          },
        ]}
      />
    </>
  );
};

export default Example;
