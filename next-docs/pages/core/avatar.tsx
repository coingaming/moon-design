import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Active from '../../public/examples/avatarTW/Active';
import Colours from '../../public/examples/avatarTW/Colours';
import Default from '../../public/examples/avatarTW/Default';
import Rounded from '../../public/examples/avatarTW/Rounded';
import Sizes from '../../public/examples/avatarTW/Sizes';
import StatusOrigin from '../../public/examples/avatarTW/StatusOrigin';
import Variants from '../../public/examples/avatarTW/Variants';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('avatarTW');
  return (
    <>
      <ComponentPageDescription title="Avatar">
        <p>
          Avatars are used to represent an individual, a business, or a
          celestial being when they interact with any Coingaming brand. While
          they usually consist of an image, avatars are adaptable - letters or
          object icons may sometimes be used as fallbacks.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Variants"
        preview={<Variants />}
        code={examples ? examples.Variants : 'Loading'}
      />
      <Preview
        title="Rounded"
        preview={<Rounded />}
        code={examples ? examples.Rounded : 'Loading'}
      />
      <Preview
        title="Different colours"
        preview={<Colours />}
        code={examples ? examples.Colours : 'Loading'}
      />
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Active status"
        preview={<Active />}
        code={examples ? examples.Active : 'Loading'}
      />
      <Preview
        title="Status origin"
        preview={<StatusOrigin />}
        code={examples ? examples.StatusOrigin : 'Loading'}
      />
    </>
  );
};

export default Example;
