import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Customisation from '../../public/examples/progress/Customisation';
import Default from '../../public/examples/progress/Default';
import Sizes from '../../public/examples/progress/Sizes';
import Values from '../../public/examples/progress/Values';
import WithPin from '../../public/examples/progress/WithPin';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('progress');
  const { name, text, image } = getComponent('Progress');
  return (
    <>
      <ComponentPageDescription
        title={name}
        image={image}
        isInProgress
        isRtlSupport
        isAriaSupport
      >
        <p>{text}</p>
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
        title="Customisation"
        preview={<Customisation />}
        code={examples ? examples.Customisation : 'Loading'}
      />
      <Preview
        title="Progress with Pin"
        preview={<WithPin />}
        code={examples ? examples.WithPin : 'Loading'}
      />
      <PropsTable
        title="Progress props"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles.',
          },
          {
            name: 'size',
            type: '6xs | 5xs | 4xs | 3xs | 2xs',
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
      <PropsTable
        title="Progress.Pin props"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for custom styles.',
          },
        ]}
      />
    </>
  );
};

export default Example;
