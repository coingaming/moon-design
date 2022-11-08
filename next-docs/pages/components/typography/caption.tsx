import Preview from '../../../components/codePreview/Preview';
import ComponentPageDescription from '../../../components/ComponentPageDescription';
import DeprecationWarning from '../../../components/facing/DeprecationWarning';
import PropsTable from '../../../components/PropsTable';
import Colors from '../../../public/examples/caption/Colors';
import FontWeight from '../../../public/examples/caption/FontWeight';
import SemanticTags from '../../../public/examples/caption/SemanticTags';
import Sizes from '../../../public/examples/caption/Sizes';
import TextAlign from '../../../public/examples/caption/TextAlign';
import useExamples from '../../../utils/useExamples';

const PageCaption = () => {
  const examples = useExamples('caption');
  return (
    <>
      <ComponentPageDescription title="Caption">
        <DeprecationWarning href="/core/typography" name="Typography" />
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
            description: 'Caption color',
          },
          {
            name: 'size',
            type: '9 | 10',
            required: false,
            default: '10',
            description: 'Caption size',
          },
          {
            name: 'isRegular',
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
        ]}
      />
    </>
  );
};

export default PageCaption;
