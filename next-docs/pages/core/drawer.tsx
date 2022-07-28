import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/drawerTW/Default';
import WithoutButton from '../../public/examples/drawerTW/WithoutButton';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('drawerTW');
  return (
    <div className="flex flex-col gap-2">
      <ComponentPageDescription title="Drawer">
        <p>
          Moon drawer appears on the right of the screen by triggering with a
          table row, CTA, etc. Used to show more details that a table row
          contents. It uses same header (and footer if need to confirm changes
          in edit mode)
        </p>
      </ComponentPageDescription>
      <div className="mb-6">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </div>
      <div className="mb-6">
        <Preview
          title="Drawer without buttons"
          preview={<WithoutButton />}
          code={examples ? examples.Default : 'Loading'}
        />
      </div>
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
            name: 'viewportWidth',
            type: 'number',
            required: false,
            default: '-',
            description: 'Width for viewport',
          },
          {
            name: 'viewportHeight',
            type: 'number',
            required: false,
            default: '-',
            description: 'Height for viewport',
          },
          {
            name: 'primaryButton',
            type: 'ReactElement',
            required: false,
            default: '-',
            description: 'Button for footer',
          },
          {
            name: 'secondaryButton',
            type: 'ReactElement',
            required: false,
            default: '-',
            description: 'Button for footer',
          },
          {
            name: 'tertiaryButton',
            type: 'ReactElement',
            required: false,
            default: '-',
            description: 'Button for footer',
          },
        ]}
      />
    </div>
  );
};

export default Example;
