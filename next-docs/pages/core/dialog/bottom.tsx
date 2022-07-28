import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import PropsTable from '../../../components/PropsTable';
import ContentOnly from '../../../public/examples/dialogTW/ContentOnly';
import Default from '../../../public/examples/dialogTW/Default';
import HeaderAndFooter from '../../../public/examples/dialogTW/HeaderAndFooter';
import useExamples from '../../../utils/useExamples';

const Example = () => {
  const examples = useExamples('dialogTW');
  return (
    <>
      <ComponentPageDescription title="Bottom sheet (mobile only)">
        <div className="w-[414px] leading-8">
          <p>
            The bottom sheet component is a great way to present users with a
            wide variety of different content that is anchored to the bottom of
            the mobile screen. Bottom sheet plays different roles:
            <b> Modal dialog , Popover </b>
            and <b>Drawer</b>
          </p>
          <p>
            The bottom sheet component is divided into three different variants
          </p>
          <ul className="list-disc">
            <li>Content with Header module</li>
            <li> Content only</li>
            <li>Content with Header module and Footer module</li>
          </ul>
        </div>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Content only"
        preview={<ContentOnly />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Header and Footer"
        preview={<HeaderAndFooter />}
        code={examples ? examples.Default : 'Loading'}
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
