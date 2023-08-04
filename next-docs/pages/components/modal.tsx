import { ReactNode } from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import BigContent from '../../public/examples/modal/BigContent';
import Default from '../../public/examples/modal/Default';
import StyledContent from '../../public/examples/modal/StyledContent';
import WithSelect from '../../public/examples/modal/WithSelect';
import useComponent from '../../utils/useComponent';
import type { ComponentNames } from '../../components/getComponent';

const COMPONENT_NAME: ComponentNames = 'Modal';

const PageModal = () => {
  const { examples, name, text, image } = useComponent(COMPONENT_NAME);
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isAriaSupport
        isRtlSupport
      >
        <p>{text}</p>
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
        {`<Modal>
  <Modal.Backdrop />
  <Modal.Title>...<Modal.Title>
  <Modal.Panel>...<Modal.Panel>
</Modal>`}
      </ComponentAnatomy>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Example with big content"
        preview={<BigContent />}
        code={examples ? examples.BigContent : 'Loading'}
      />
      <Preview
        title="Example with styled content"
        preview={<StyledContent />}
        code={examples ? examples.StyledContent : 'Loading'}
      />

      <Preview
        title="Example with Select"
        preview={<WithSelect />}
        code={examples ? examples.WithSelect : 'Loading'}
      />

      <PropsTable
        title="Modal"
        data={[
          {
            name: 'open',
            type: 'boolean',
            required: true,
            default: '-',
            description: 'Whether the Modal is open or not.',
          },
          {
            name: 'onClose',
            type: '() => void',
            required: true,
            default: '-',
            description: 'Called when the Modal is dismissed.',
          },
        ]}
      />

      <PropsTable
        title="Modal.Panel"
        data={[
          {
            name: 'className',
            type: 'string',
            required: true,
            default: '-',
            description: 'Tailwind classes for customization of Panel.',
          },
        ]}
      />

      <PropsTable
        title="Modal.Backdrop"
        data={[
          {
            name: 'className',
            type: 'string',
            required: true,
            default: '-',
            description: 'Tailwind classes for customization of Backdrop.',
          },
        ]}
      />
    </>
  );
};

PageModal.getLayout = function getLayout(page: ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageModal;
