import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import Colors from '../../../public/styledExamples/text/Colors';
import FontWeight from '../../../public/styledExamples/text/FontWeight';
import LineHeight from '../../../public/styledExamples/text/LineHeight';
import SemanticTags from '../../../public/styledExamples/text/SemanticTags';
import Sizes from '../../../public/styledExamples/text/Sizes';
import TextAlign from '../../../public/styledExamples/text/TextAlign';
import Underline from '../../../public/styledExamples/text/Underline';
import Uppercase from '../../../public/styledExamples/text/Uppercase';
import useStyledExamples from '../../../utils/useStyledExamples';

const PageText = () => {
  const examples = useStyledExamples('text');
  return (
    <>
      <ComponentPageDescription title="Text" isDeprecated>
        <DeprecationWarning href="/typography" name="Typography" />
      </ComponentPageDescription>
      <Preview
        title="Colors"
        preview={<Colors />}
        code={examples ? examples.Colors : 'Loading'}
      />
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Font Weight"
        preview={<FontWeight />}
        code={examples ? examples.FontWeight : 'Loading'}
      />
      <Preview
        title="Text Align"
        preview={<TextAlign />}
        code={examples ? examples.TextAlign : 'Loading'}
      />
      <Preview
        title="Uppercase"
        preview={<Uppercase />}
        code={examples ? examples.Uppercase : 'Loading'}
      />
      <Preview
        title="Underline"
        preview={<Underline />}
        code={examples ? examples.Underline : 'Loading'}
      />
      <Preview
        title="Line height"
        preview={<LineHeight />}
        code={examples ? examples.LineHeight : 'Loading'}
      />
      <Preview
        title="Semantic tags"
        preview={<SemanticTags />}
        code={examples ? examples.SemanticTags : 'Loading'}
      />
      <PropsTable
        title="Props"
        data={[
          {
            name: 'color',
            type: 'ColorProps',
            required: false,
            default: '-',
            description: 'Text color',
          },
          {
            name: 'size',
            type: '9 | 10 | 12 | 14 | 16 | 18 | 20 | 24 | 32 | 48 | 56 | 64 | 72',
            required: false,
            default: '16',
            description: 'Text size',
          },
          {
            name: 'isBold',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Font weight',
          },
          {
            name: 'textAlign',
            type: 'left | center | right | justify | initial | inherit',
            required: false,
            default: '-',
            description: 'Alignment',
          },
          {
            name: 'isUppercase',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Uppercase Text',
          },
          {
            name: 'isUnderline',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Underline Text',
          },
          {
            name: 'lineHeight',
            type: 'number',
            required: false,
            default: 'pre-calculated',
            description: 'Custom line height',
          },
        ]}
      />
    </>
  );
};

export default PageText;
