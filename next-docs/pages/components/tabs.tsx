import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/tabs/Default';
import HorizontalVariants from '../../public/examples/tabs/HorizontalVariants';
import Small from '../../public/examples/tabs/Small';
import Variant from '../../public/examples/tabs/Variant';
import VerticalVariants from '../../public/examples/tabs/VerticalVariants';
import useExamples from '../../utils/useExamples';

const PageTabsNew = () => {
  const examples = useExamples('tabs');
  return (
    <>
      <ComponentPageDescription title="Tabs">
        <DeprecationWarning href="/core/tabs" name="Tabs" />
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Horizontal variants"
        preview={<HorizontalVariants />}
        code={examples ? examples.HorizontalVariants : 'Loading'}
      />
      <Preview
        title="Vertical variants"
        preview={<VerticalVariants />}
        code={examples ? examples.VerticalVariants : 'Loading'}
      />
      <Preview
        title="Size: 'small'"
        preview={<Small />}
        code={examples ? examples.Small : 'Loading'}
      />
      <Preview
        title="Tabs with additional elements"
        preview={<Variant />}
        code={examples ? examples.Variant : 'Loading'}
      />
      <PropsTable
        title="Props for Tabs component"
        data={[
          {
            name: 'items',
            type: 'React.ReactElement[]',
            required: 'true',
            default: '-',
            description:
              'TabLink/TabLinkFill or any other component provide the tab interaction',
          },
          {
            name: 'size',
            type: 'small | medium',
            required: 'false',
            default: 'medium',
            description: 'Small/medium size for tab items',
          },
          {
            name: 'dir',
            type: 'ltr | rtl | auto',
            required: 'false',
            default: 'auto',
            description: 'Support right to left languages',
          },
          {
            name: 'isTop',
            type: 'boolean',
            required: 'false',
            default: 'false',
            description: 'Underline top view. Only for TabLink',
          },
          {
            name: 'isContainer',
            type: 'boolean',
            required: 'false',
            default: 'false',
            description: 'Segment control view. Only for TabLinkFill',
          },
        ]}
      />
      <PropsTable
        title="Props for TabsLink/TabsLinkFill components"
        data={[
          {
            name: 'elementLeft',
            type: 'React.ReactElement',
            required: 'false',
            default: '-',
            description: 'Left icon element',
          },
          {
            name: 'count',
            type: 'string',
            required: 'false',
            default: '-',
            description: 'Rigth text element',
          },
          {
            name: 'href',
            type: 'string',
            required: 'false',
            default: '-',
            description: `The href attribute specifies the link's destination`,
          },
          {
            name: 'isActive',
            type: 'boolean',
            required: 'false',
            default: '-',
            description: `Set item as active by default`,
          },
          {
            name: 'onClick',
            type: 'function',
            required: 'false',
            default: '-',
            description: `Handler on click action`,
          },
        ]}
      />
    </>
  );
};

export default PageTabsNew;
