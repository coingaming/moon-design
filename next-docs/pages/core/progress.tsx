import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Colors from '../../public/examples/progressTw/Colors';
import Default from '../../public/examples/progressTw/Default';
import Sizes from '../../public/examples/progressTw/Sizes';
import Values from '../../public/examples/progressTw/Values';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('progressTW');
  return (
    <>
      <ComponentPageDescription
        title="Progress"
        isAriaSupport
        isRtlSupport
        isInProgress // Added 01.11.2022
      >
        <p>
          A progress indicator is a visual representation of a user's progress
          through a set of steps, guiding toward the completion of a specified
          process.
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
            required: 'false',
            default: 'bg-trunks/[.24]',
            description: 'Background colour',
          },
          {
            name: 'progressColor',
            type: 'string',
            required: 'false',
            default: 'bg-piccolo',
            description: 'Progress bar colour',
          },
          {
            name: 'size',
            type: '6xs | 5xs | 4xs | 3xs | 2xs',
            required: 'false',
            default: '2xs',
            description: 'Size of Progress',
          },
          {
            name: 'value',
            type: 'number',
            required: 'false',
            default: '0',
            description: 'Value of Progress in %',
          },
        ]}
      />
    </>
  );
};

export default Example;
