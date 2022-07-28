import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import PropsTable from '../../../components/PropsTable';
import FooterDefault from "../../../public/examples/dialogTW/FooterDefault";
import FooterVertical from "../../../public/examples/dialogTW/FooterVertical";
import useExamples from '../../../utils/useExamples';

const Example = () => {
  const examples = useExamples('dialogTW');
  return (
    <>
      <ComponentPageDescription title="Footer module">
        <div className="leading-8">
          <p>
            Footer is a confirmation module to be used
            in the <strong>Modal dialogs, Popovers, Multi select Dropdown, Drawers</strong> and <strong>Bottom sheet</strong> </p>
        </div>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<FooterDefault />}
        code={examples ? examples.FooterDefault : 'Loading'}
      />
      <Preview
        title="Vertical"
        preview={<FooterVertical />}
        code={examples ? examples.FooterVertical : 'Loading'}
      />
      <PropsTable
        title="Props for Dialog component"
        data={[
          {
            name: 'leftButtons',
            type: 'array',
            required: false,
            default: '-',
            description: 'Array of elements placed left of the title',
          },
          {
            name: 'rightButtons',
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
            description: 'Whether footer should have top border and padding',
          },
        ]}
      />
    </>
  );
};

export default Example;
