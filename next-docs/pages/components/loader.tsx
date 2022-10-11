import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import PropsTable from '../../components/PropsTable';
import Colours from '../../public/examples/loader/Colours';
import Default from '../../public/examples/loader/Default';
import Sizes from '../../public/examples/loader/Sizes';
import useExamples from '../../utils/useExamples';

const PageLoader = () => {
  const examples = useExamples('loader');
  return (
    <>
      <ComponentPageDescription title="Loader">
        <DeprecationWarning href="/core/loader" name="Loader" />
        <p>
          Fondly nicknamed “the launcher”, the Loader ensures users that
          progress is happening so they don't give up and leave the rocket page.
        </p>
        <p>
          The Loader, along with a succinct message, is especially important
          after a user initiates an action that requires them to wait. This is
          so that they know there's no need to repeat what they've done.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
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
      <PropsTable
        title="Props"
        data={[
          {
            name: 'color',
            type: 'ColorProps',
            required: false,
            default: 'bulma',
            description: 'Colour of Loader',
          },
          {
            name: 'size',
            type: 'twoxsmall | xsmall | small | medium | large',
            required: false,
            default: 'medium',
            description: 'Size of Loader',
          },
        ]}
      />
    </>
  );
};

export default PageLoader;
