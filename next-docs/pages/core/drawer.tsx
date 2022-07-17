import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/drawerTW/Default';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('drawerTW');
  return (
    <div className=''>
      <ComponentPageDescription title="Drawer">
        <p>
          Moon drawer appears on the right of the screen by triggering with a
          table row, CTA, etc. Used to show more details that a table row
          contents. It uses same header (and footer if need to confirm changes
          in edit mode)
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <PropsTable
        title="Props for Drawer component"
        data={[
          {
            name: 'title',
            type: 'string',
            required: false,
            default: '-',
            description: 'Title for header',
          },
          {
            name: 'content',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description: 'The contents of the drawer',
          },
          {
            name: 'buttonOneLabel',
            type: 'string',
            required: false,
            default: '-',
            description: 'Text for footer button',
          },
          {
            name: 'buttonTwoLabel',
            type: 'string',
            required: false,
            default: '-',
            description: 'Text for footer button',
          },
          {
            name: 'buttonThreeLabel',
            type: 'string',
            required: false,
            default: '-',
            description: 'Text for footer button',
          },

        ]}
      />
    </div>
  );
};

export default Example;
