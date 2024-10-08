import { ReactNode } from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import type { ComponentNames } from '../../components/getComponent';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import Background from '../../public/examples/accordion/Background';
import ContentHeader from '../../public/examples/accordion/ContentHeader';
import ContentOutside from '../../public/examples/accordion/ContentOutside';
import ContentOutsideSizes from '../../public/examples/accordion/ContentOutsideSizes';
import ControlOutside from '../../public/examples/accordion/ControlOutside';
import Default from '../../public/examples/accordion/Default';
import Disabled from '../../public/examples/accordion/Disabled';
import OpenDefault from '../../public/examples/accordion/OpenDefault';
import Single from '../../public/examples/accordion/Single';
import Sizes from '../../public/examples/accordion/Sizes';
import useComponent from '../../utils/useComponent';

const COMPONENT_NAME: ComponentNames = 'Accordion';

const PageAccordion = () => {
  const { examples, name, text, image } = useComponent(COMPONENT_NAME);
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isRtlSupport
        isAriaSupport
      >
        <p>{text}</p>
        <p>
          Based on{' '}
          <a
            href="https://www.radix-ui.com/"
            className="transition-colors underline hover:text-piccolo"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI
          </a>
          .
        </p>
      </ComponentPageDescription>
      <ComponentAnatomy>
        {`<Accordion>
  <Accordion.Item>
    <Accordion.Header>
      <Accordion.Button>...</Accordion.Button>
    </Accordion.Header>
    <Accordion.Content>...</Accordion.Content>
  </Accordion.Item>
</Accordion>`}
      </ComponentAnatomy>

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
        title="One item open at a time"
        preview={<Single />}
        code={examples ? examples.Single : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<Disabled />}
        code={examples ? examples.Disabled : 'Loading'}
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
        title="Custom background"
        preview={<Background />}
        code={examples ? examples.Background : 'Loading'}
      />
      <Preview
        title="Open/Close all items programmatically"
        preview={<ControlOutside />}
        code={examples ? examples.ControlOutside : 'Loading'}
      />
      <PropsTable
        title="Accordion props"
        data={[
          {
            name: 'itemSize',
            type: 'sm | md | lg | xl',
            required: false,
            default: 'md',
            description: 'Size of accordeon item',
          },
          {
            name: 'singleOpen',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Whether only one item can be opened at a time',
          },
          {
            name: 'defaultValue',
            type: 'string',
            required: false,
            default: '-',
            description: 'The value of the item to expand',
          },
          {
            name: 'value',
            type: 'string[]',
            required: false,
            default: '-',
            description: 'The accordeon items value',
          },
          {
            name: 'onValueChange',
            type: '(value: string[]) => void',
            required: false,
            default: '-',
            description:
              'Event handler called when the expanded state of an item changes and prop singleOpen in false state',
          },
        ]}
      />
      <PropsTable
        title="Accordion.Item props"
        data={[
          {
            name: 'value',
            type: 'string',
            required: true,
            default: '-',
            description: 'The accordeon item value',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Set disabled/non-disabled',
          },
        ]}
      />
    </>
  );
};

PageAccordion.getLayout = function getLayout(page: ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageAccordion;
