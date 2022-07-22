import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Default from '../../public/examples/dialogTW/Default';
import useExamples from '../../utils/useExamples';

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
    </>
  );
};

export default Example;
