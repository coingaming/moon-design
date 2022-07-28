import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import PropsTable from '../../../components/PropsTable';
import HeaderDefault from "../../../public/examples/dialogTW/HeaderDefault";
import HeaderDivider from "../../../public/examples/dialogTW/HeaderDivider";
import HeaderIcons from "../../../public/examples/dialogTW/HeaderIcons";
import useExamples from '../../../utils/useExamples';

const Example = () => {
  const examples = useExamples('dialogTW');
  return (
    <>
      <ComponentPageDescription title="Header module">
        <div className="w-[414px] leading-8">
          <p>
            Header module variants to be used in Modal dialogs, Popovers, Dropdowns, Drawers and Bottom sheet
          </p>
        </div>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<HeaderDefault />}
        code={examples ? examples.HeaderDefault : 'Loading'}
      />
      <Preview
        title="With icons"
        preview={<HeaderIcons />}
        code={examples ? examples.HeaderIcons : 'Loading'}
      />
      <Preview
        title="With divider"
        preview={<HeaderDivider />}
        code={examples ? examples.HeaderDivider : 'Loading'}
      />
      <PropsTable
        title="Props for Dialog component"
        data={[
          {
            name: 'leftIcons',
            type: 'array',
            required: false,
            default: '-',
            description: 'Array of elements placed left of the title',
          },
          {
            name: 'title',
            type: 'string | ReactElement',
            required: false,
            default: '-',
            description: 'Textual content of header',
          },
          {
            name: 'rightIcons',
            type: 'array',
            required: false,
            default: '-',
            description: 'Array of elements placed right of the title',
          },
          {
            name: 'isDivider',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Whether header should have bottom border and padding',
          },
        ]}
      />
    </>
  );
};

export default Example;
