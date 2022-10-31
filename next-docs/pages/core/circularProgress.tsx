import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Colors from '../../public/examples/circularProgressTw/Colors';
import Default from '../../public/examples/circularProgressTw/Default';
import Sizes from '../../public/examples/circularProgressTw/Sizes';
import Values from '../../public/examples/circularProgressTw/Values';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('circularProgressTW');
  return (
    <>
      <ComponentPageDescription title="CircularProgress">
        <p>
          A progress indicator (Circular and Linear) is a visual representation
          of a user's progress through a set of steps, guiding toward the
          completion of a specified process.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Different sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Different values"
        preview={<Values />}
        code={examples ? examples.Values : 'Loading'}
      />
      <Preview
        title="Custom colours"
        preview={<Colors />}
        code={examples ? examples.Colors : 'Loading'}
      />
      <PropsTable
        title="Progress props"
        data={[
          {
            name: 'bgColor',
            type: 'string',
            required: false,
            default: 'stroke-trunks/[.24]',
            description: 'Background colour',
          },
          {
            name: 'progressColor',
            type: 'string',
            required: false,
            default: 'stroke-piccolo',
            description: 'Progress bar colour',
          },
          {
            name: 'size',
            type: '2xs | xs | sm | md | lg',
            required: false,
            default: '2xs',
            description: 'Size of Progress',
          },
          {
            name: 'value',
            type: 'number',
            required: false,
            default: '0',
            description: 'Value of Progress in %',
          },
        ]}
      />
    </>
  );
};

export default Example;
