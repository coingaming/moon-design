import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import type { ComponentNames } from '../../components/getComponent';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import ArrowPositions from '../../public/examples/tooltip/ArrowPositions';
import Customization from '../../public/examples/tooltip/Customization';
import Default from '../../public/examples/tooltip/Default';
import NotPortal from '../../public/examples/tooltip/NotPortal';
import useComponent from '../../utils/useComponent';

const COMPONENT_NAME: ComponentNames = 'Tooltip';

const PageTooltip = () => {
  const { examples, name, text, image } = useComponent(COMPONENT_NAME);
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isInProgress
        isAriaSupport
        isRtlSupport
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
            Radix
          </a>
          .
        </p>
      </ComponentPageDescription>
      <ComponentAnatomy>
        {`<Tooltip>
  <Tooltip.Trigger>...</Tooltip.Trigger>
  <Tooltip.Content>
    ...
    <Tooltip.Arrow />
  </Tooltip.Content>
</Tooltip>`}
      </ComponentAnatomy>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Arrow positions"
        preview={<ArrowPositions />}
        code={examples ? examples.ArrowPositions : 'Loading'}
      />
      <Preview
        title="Customization"
        preview={<Customization />}
        code={examples ? examples.Customization : 'Loading'}
      />
      <Preview
        title="Render content into the specific container (not body)"
        preview={<NotPortal />}
        code={examples ? examples.NotPortal : 'Loading'}
      />
      <PropsTable
        title="Tooltip.Trigger props"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
        ]}
      />
      <PropsTable
        title="Tooltip.Content props"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
          {
            name: 'position',
            type: 'top-start | top-center | top-end | bottom-start | bottom-center | bottom-end | right | left',
            required: false,
            default: 'top-center',
            description: 'Position of Tooltip',
          },
          {
            name: 'container',
            type: 'HTMLElement | null',
            required: false,
            default: 'document.body',
            description:
              'Specify a container element to portal the content into.',
          },
        ]}
      />
      <PropsTable
        title="Tooltip.Arrow props"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
        ]}
      />
    </>
  );
};

PageTooltip.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageTooltip;
