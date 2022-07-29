import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import PropsTable from '../../../components/PropsTable';
import PopoverDefault from "../../../public/examples/dialogTW/PopoverDefault";
import PopoverPositions from "../../../public/examples/dialogTW/PopoverPositions";
import PopoverTitleFooter from "../../../public/examples/dialogTW/PopoverTitleFooter";
import useExamples from '../../../utils/useExamples';

const Example = () => {
  const examples = useExamples('dialogTW');
  return (
    <>
      <ComponentPageDescription title="Modal">
        <div className="leading-8">
          <p>
            The Popover is a kind of dialog that is triggered by <strong>Buttons, Chips, Links, Search</strong> and appears in any place accordingly / in the context of the trigger position.
          </p>
        </div>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<PopoverDefault />}
        code={examples ? examples.ModalDefault : 'Loading'}
      />
      <Preview
        title="With title and footer"
        preview={<PopoverTitleFooter />}
        code={examples ? examples.ModalTitleFooter : 'Loading'}
      />
      <Preview
        title="Placement variations"
        preview={<PopoverPositions />}
        code={examples ? examples.ModalCustomWidth : 'Loading'}
      />
      <PropsTable
        title="Props for Popover component"
        data={[
          {
            name: 'isOpen',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Should modal be opened or not',
          },
          {
            name: 'placement',
            type: 'top | right | bottom | left',
            required: false,
            default: 'top',
            description: 'Place of Popover relative to original element',
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
