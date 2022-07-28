import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import PropsTable from '../../../components/PropsTable';
import ModalCustomWidth from "../../../public/examples/dialogTW/ModalCustomWidth";
import ModalDefault from "../../../public/examples/dialogTW/ModalDefault";
import ModalTitle from "../../../public/examples/dialogTW/ModalTitle";
import ModalTitleFooter from "../../../public/examples/dialogTW/ModalTitleFooter";
import useExamples from '../../../utils/useExamples';

const Example = () => {
  const examples = useExamples('dialogTW');
  return (
    <>
      <ComponentPageDescription title="Modal">
        <div className="leading-8">
          <p>
            The modal dialog (or modal as we call it) is used to capture attention so users are informed about a task, critical information or a decision they have to make. It usually resides on the top of a page. When modals are active, users are unable to see the content that’s currently on the page. They also won’t be able to return to what they were previously doing until the modal is dismissed or a task/decision is completed.
          </p>
          <p>
            As experienced astronauts, we recommend using modals sparingly. They are effective when used correctly, but they can also be disruptive.
          </p>
        </div>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<ModalDefault />}
        code={examples ? examples.ModalDefault : 'Loading'}
      />
      <Preview
        title="With title"
        preview={<ModalTitle />}
        code={examples ? examples.ModalTitle : 'Loading'}
      />
      <Preview
        title="With title and footer"
        preview={<ModalTitleFooter />}
        code={examples ? examples.ModalTitleFooter : 'Loading'}
      />
      <Preview
        title="Custom width and height"
        preview={<ModalCustomWidth />}
        code={examples ? examples.ModalCustomWidth : 'Loading'}
      />
      <PropsTable
        title="Props for Modal component"
        data={[
          {
            name: 'isOpen',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Should modal be opened or not',
          },
          {
            name: 'header',
            type: 'ReactElement',
            required: false,
            default: '-',
            description: 'Header element for modal',
          },
          {
            name: 'content',
            type: 'ReactElement',
            required: true,
            default: '-',
            description: 'Content of the modal',
          },
          {
            name: 'footer',
            type: 'ReactElement',
            required: false,
            default: '-',
            description: 'Footer element for modal',
          },
        ]}
      />
    </>
  );
};

export default Example;
