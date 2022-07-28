import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import PropsTable from '../../../components/PropsTable';
import ContentOnly from '../../../public/examples/dialogTW/BottmSheetContent';
import BottomSheet from "../../../public/examples/dialogTW/BottomSheet";
import useExamples from '../../../utils/useExamples';

const Example = () => {
  const examples = useExamples('dialogTW');
  return (
    <>
      <ComponentPageDescription title="Bottom sheet (mobile only)">
        <div className="leading-8">
          <p>
            The bottom sheet component is a great way to present users with a
            wide variety of different content that is anchored to the bottom of
            the mobile screen. Bottom sheet plays different roles:
            <b> Modal dialog , Popover </b>
            and <b>Drawer</b>
          </p>
          <p className='mt-2'>
            The bottom sheet component is divided into three different variants
          </p>
          <ul className="list-inside list-disc mt-2">
            <li>Content with Header module</li>
            <li>Content only</li>
            <li>Content with Header module and Footer module</li>
          </ul>
        </div>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<BottomSheet />}
        code={examples ? examples.BottomSheet : 'Loading'}
      />
      <Preview
        title="Content only"
        preview={<ContentOnly />}
        code={examples ? examples.ContentOnly : 'Loading'}
      />
      <PropsTable
        title="Props for Dialog component"
        data={[
          {
            name: 'isOpen',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'isOpen is used for showing dialog component',
          },
          {
            name: 'header',
            type: 'ReactElement',
            required: false,
            default: '-',
            description: 'Header of component',
          },
          {
            name: 'content',
            type: 'ReactElement',
            required: true,
            default: '-',
            description: 'Main content for dialog component',
          },
          {
            name: 'footer',
            type: 'ReactElement',
            required: false,
            default: '-',
            description: 'Footer of component',
          },
        ]}
      />
    </>
  );
};

export default Example;
