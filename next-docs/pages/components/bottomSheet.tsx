import { ReactNode } from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import type { ComponentNames } from '../../components/getComponent';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import Customization from '../../public/examples/bottomSheet/Customization';
import Default from '../../public/examples/bottomSheet/Default';
import RootPortal from '../../public/examples/bottomSheet/RootPortal';
import Sizes from '../../public/examples/bottomSheet/Sizes';
import WithDraghandle from '../../public/examples/bottomSheet/WithDraghandle';
import WithTitle from '../../public/examples/bottomSheet/WithTitle';
import useComponent from '../../utils/useComponent';

const COMPONENT_NAME: ComponentNames = 'BottomSheet';

const CustomRootDescription = () => (
  <>
    <p>
      By default, BottomSheet content is inserted as a portal directly into the
      document.body. If it's necessary to insert a component into a custom DOM
      node, follow these steps:
    </p>
    <ul>
      <li>
        1. Add the following HTML code in the location where the component
        should be rendered:{' '}
        <pre className="flex w-full p-2 bg-gohan rounded-moon-s-sm overflow-scroll text-moon-14 text-bulma">
          {`<div id="headlessui-portal-root"><div /></div>`}
        </pre>
      </li>
      <li>
        2. Set a prop <b>rootId</b> to the {`<BottomSheet>`} component with the
        id of the root element. Example:
        <pre className="flex w-full p-2 bg-gohan rounded-moon-s-sm overflow-scroll text-moon-14 text-bulma">
          {`<BottomSheet rootId="__next">...</BottomSheet>`}
        </pre>
        By doing this, the "inert" attribute that was added to an ancestor will
        be removed automatically, and the BottomSheet will become interactive.
      </li>
    </ul>
  </>
);
const PageBottomSheet = () => {
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
          Bottom sheets can contain any anything so let your imagination fly.
        </p>
        <p>
          Based on{' '}
          <a
            href="https://headlessui.com/"
            className="transition-colors underline hover:text-piccolo"
            target="_blank"
            rel="noreferrer"
          >
            Headless UI
          </a>
          .
        </p>
      </ComponentPageDescription>
      <ComponentAnatomy>
        {`<BottomSheet>
  <BottomSheet.Panel>
    <BottomSheet.Draghandle>
      <BottomSheet.Title>...</BottomSheet.Title>
    </BottomSheet.Draghandle>
    ...
  </BottomSheet.Panel>
  <BottomSheet.Backdrop />
</BottomSheet>`}
      </ComponentAnatomy>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Different sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="With Draghandle"
        preview={<WithDraghandle />}
        code={examples ? examples.WithDraghandle : 'Loading'}
      />
      <Preview
        title="With Title"
        preview={<WithTitle />}
        code={examples ? examples.WithTitle : 'Loading'}
      />
      <Preview
        title="Customization"
        preview={<Customization />}
        code={examples ? examples.Customization : 'Loading'}
      />
      <Preview
        title="Custom root element"
        preview={<RootPortal />}
        code={examples ? examples.RootPortal : 'Loading'}
        description={<CustomRootDescription />}
      />
      <PropsTable
        title="BottomSheet"
        data={[
          {
            name: 'onClose',
            type: '() => void',
            required: true,
            default: '-',
            description: 'Called when the BottomSheet is dismissed',
          },
          {
            name: 'open',
            type: 'boolean',
            required: true,
            default: '-',
            description: 'Whether the BottomSheet is open or not',
          },
          {
            name: 'rootId',
            type: 'string',
            required: false,
            default: '-',
            description: 'Root element id with inert attribute',
          },
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
        title="BottomSheet.Panel"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
          {
            name: 'onClose',
            type: '() => void',
            required: false,
            default: '-',
            description: 'Called when the BottomSheet is dismissed',
          },
        ]}
      />
      <PropsTable
        title="BottomSheet.Draghandle"
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
        title="BottomSheet.Title"
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
        title="BottomSheet.Backdrop"
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

PageBottomSheet.getLayout = function getLayout(page: ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageBottomSheet;
