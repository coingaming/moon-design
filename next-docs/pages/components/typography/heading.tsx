import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import Colors from '../../../public/examples/heading/Colors';
import FontWeight from '../../../public/examples/heading/FontWeight';
import LineHeight from '../../../public/examples/heading/LineHeight';
import SemanticTags from '../../../public/examples/heading/SemanticTags';
import Sizes from '../../../public/examples/heading/Sizes';
import TextAlign from '../../../public/examples/heading/TextAlign';
import Underline from '../../../public/examples/heading/Underline';
import Uppercase from '../../../public/examples/heading/Uppercase';
import useExamples from '../../../utils/useExamples';

const PageHeading = () => {
  const examples = useExamples('heading');
  return (
    <>
      <ComponentPageDescription title="Heading">
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
            required: 'false',
            default: '-',
            description: 'Heading color',
          },
          {
            name: 'size',
            type: '16 | 18 | 20 | 24 | 32 | 48 | 56 | 64 | 72',
            required: 'false',
            default: '16',
            description: 'Heading size',
          },
          {
            name: 'isRegular',
            type: 'boolean',
            required: 'false',
            default: 'false',
            description: 'Font weight',
          },
          {
            name: 'textAlign',
            type: 'left | center | right | justify | initial | inherit',
            required: 'false',
            default: '-',
            description: 'Alignment',
          },
          {
            name: 'isUppercase',
            type: 'boolean',
            required: 'false',
            default: 'false',
            description: 'Uppercase Heading',
          },
          {
            name: 'isUnderline',
            type: 'boolean',
            required: 'false',
            default: 'false',
            description: 'Underline Heading',
          },
          {
            name: 'lineHeight',
            type: 'number',
            required: 'false',
            default: 'pre-calculated',
            description: 'Custom line height',
          },
        ]}
      />
    </>
  );
};

export default PageHeading;
