import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import PropsTable from '../../components/PropsTable';
import Colours from '../../public/styledExamples/label/Colours';
import Icons from '../../public/styledExamples/label/Icons';
import LetterCases from '../../public/styledExamples/label/LetterCases';
import Sizes from '../../public/styledExamples/label/Sizes';
import useStyledExamples from '../../utils/useStyledExamples';

const PageLabel = () => {
  const examples = useStyledExamples('label');
  return (
    <>
      <ComponentPageDescription title="Label" isDeprecated>
        <DeprecationWarning href="/components/tag" name="Tag" />
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
