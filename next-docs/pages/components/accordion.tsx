import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import PropsTable from '../../components/PropsTable';
import ContentOutside from '../../public/examples/accordionNew/ContentOutside';
import Default from '../../public/examples/accordionNew/Default';
import DisableOpen from '../../public/examples/accordionNew/DisableOpen';
import HeaderContent from '../../public/examples/accordionNew/HeaderContent';
import OpenByDefault from '../../public/examples/accordionNew/OpenByDefault';
import Sizes from '../../public/examples/accordionNew/Sizes';
import SizesContentOutside from '../../public/examples/accordionNew/SizesContentOutside';
import WithoutButton from '../../public/examples/accordionNew/WithoutButton';
import useExamples from '../../utils/useExamples';

const PageAccordion = () => {
  const examples = useExamples('accordionNew');
  return (
    <>
      <ComponentPageDescription title="Accordion">
        <DeprecationWarning href="/core/accordion" name="Accordion" />
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples.Default ? examples.Default : 'Loading'}
      />
      <Preview
        title="Open by default"
        preview={<OpenByDefault />}
        code={examples.OpenByDefault ? examples.OpenByDefault : 'Loading'}
      />
      <Preview
        title="Without button"
        preview={<WithoutButton />}
        code={examples.WithoutButton ? examples.WithoutButton : 'Loading'}
      />
      <Preview
        title="Disable open"
        preview={<DisableOpen />}
        code={examples.DisableOpen ? examples.DisableOpen : 'Loading'}
      />
      <Preview
        title="Content outside"
        preview={<ContentOutside />}
        code={examples.ContentOutside ? examples.ContentOutside : 'Loading'}
      />
      <Preview
        title="Header content"
        preview={<HeaderContent />}
        code={examples.HeaderContent ? examples.HeaderContent : 'Loading'}
      />
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples.Sizes ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Sizes: content outside"
        preview={<SizesContentOutside />}
        code={
          examples.SizesContentOutside
            ? examples.SizesContentOutside
            : 'Loading'
        }
      />
      <PropsTable
        title="Props"
        data={[
          {
            name: 'title',
            type: 'string',
            required: 'true',
            default: '-',
            description: 'Title of accordion',
          },
          {
            name: 'openByDefault',
            type: 'boolean',
            required: 'false',
            default: 'false',
            description: 'Expanded/collapsed accordion by default',
          },
          {
            name: 'withButton',
            type: 'boolean',
            required: 'false',
            default: 'true',
            description: 'Show expand/collapse chevron',
          },
          {
            name: 'disableOpen',
            type: 'boolean',
            required: 'false',
            default: 'false',
            description: 'Disable expand/collapse accordion',
          },
          {
            name: 'headerContent',
            type: 'React.ReactNode',
            required: 'false',
            default: '-',
            description: 'Additional content to render in accordion header',
          },
          {
            name: 'children',
            type: 'React.ReactNode',
            required: 'true',
            default: '-',
            description: 'Content to show inside of accordion',
          },
          {
            name: 'size',
            type: 'xlarge | large | medium | small',
            required: 'false',
            default: 'medium',
            description: 'Size variant of accordion',
          },
          {
            name: 'isContentInside',
            type: 'boolean',
            required: 'false',
            default: 'true',
            description:
              'Whether the content is displayed outside of the accordion header',
          },
        ]}
      />
    </>
  );
};

export default PageAccordion;
