import Link from 'next/link';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Colours from '../../public/examples/label/Colours';
import Icons from '../../public/examples/label/Icons';
import LetterCases from '../../public/examples/label/LetterCases';
import Sizes from '../../public/examples/label/Sizes';
import useExamples from '../../utils/useExamples';

const PageLabel = () => {
  const examples = useExamples('label');
  return (
    <>
      <ComponentPageDescription title="Label">
        <p className="font-medium">
          NB! The component is depricated. Please use our{' '}
          <Link href="/core/label">
            <a className="text-piccolo transition-colors duration-200 hover:text-hit visited:text-hit">
              new Label
            </a>
          </Link>{' '}
          built with Tailwind.
        </p>
        <p>
          Use tags to label, categorize, or organize items using keywords that
          describe them.
        </p>
        <p>Multiple or single tags can be used to categorize items.</p>
        <p>
          Use short labels for easy scanning. Use two words only if necessary to
          describe the status and differentiate it from other tags.
        </p>
        <p>Default text style: Uppercase</p>
      </ComponentPageDescription>
      <Preview
        title="Colours"
        preview={<Colours />}
        code={examples ? examples.Colours : 'Loading'}
      />
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Label with icons"
        preview={<Icons />}
        code={examples ? examples.Icons : 'Loading'}
      />
      <Preview
        title="Letter cases"
        preview={<LetterCases />}
        code={examples ? examples.LetterCases : 'Loading'}
      />
      <PropsTable
        title="Props for Label component"
        data={[
          {
            name: 'size',
            type: 'twoxsmall | xsmall',
            required: false,
            default: 'xsmall',
            description: 'Size for label',
          },
          {
            name: 'iconLeft',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description: 'Left icon element',
          },
          {
            name: 'iconRight',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description: 'Right text element',
          },
          {
            name: 'color',
            type: 'ColorProps',
            required: false,
            default: 'gohan.100',
            description: 'Text color',
          },
          {
            name: 'backgroundColor',
            type: 'ColorProps',
            required: false,
            default: 'bulma.100',
            description: 'Background color',
          },
          {
            name: 'isUppercase',
            type: 'boolean',
            required: false,
            default: 'true',
            description: 'Letter case',
          },
        ]}
      />
    </>
  );
};

export default PageLabel;
