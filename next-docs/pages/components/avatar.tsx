import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import PropsTable from '../../components/PropsTable';
import ActiveStatus from '../../public/styledExamples/avatar/ActiveStatus';
import Colours from '../../public/styledExamples/avatar/Colours';
import Sizes from '../../public/styledExamples/avatar/Sizes';
import StatusOrigin from '../../public/styledExamples/avatar/StatusOrigin';
import Variants from '../../public/styledExamples/avatar/Variants';
import useExamples from '../../utils/useExamples';

const PageAvatar = () => {
  const examples = useExamples('avatar', 'styled');
  return (
    <>
      <ComponentPageDescription title="Avatar">
        <DeprecationWarning href="/core/avatar" name="Avatar" />
      </ComponentPageDescription>
      <Preview
        title="Variants"
        preview={<Variants />}
        code={examples ? examples.Variants : 'Loading'}
      />
      <Preview
        title="Different colours"
        preview={<Colours />}
        code={examples ? examples.Colours : 'Loading'}
      />
      <Preview
        title="Different sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
      <Preview
        title="Active status"
        preview={<ActiveStatus />}
        code={examples ? examples.ActiveStatus : 'Loading'}
      />
      <Preview
        title="Status Origin"
        preview={<StatusOrigin />}
        code={examples ? examples.StatusOrigin : 'Loading'}
      />
      <PropsTable
        title="Props"
        data={[
          {
            name: 'size',
            type: 'xsmall | small | medium | large | xlarge | twoxlarge',
            required: false,
            default: 'medium',
            description: 'Size for avatar',
          },
          {
            name: 'name',
            type: 'string | JSX.Element',
            required: false,
            default: '-',
            description: 'Capital letters of name',
          },
          {
            name: 'imageUrl',
            type: 'string',
            required: false,
            default: '-',
            description: 'Path to the image',
          },
          {
            name: 'statusOrigin',
            type: 'StatusOrigin',
            required: false,
            default: 'bottom, right',
            description: 'Position for status indication',
          },
          {
            name: 'isStatusActive',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Active state for status indication',
          },
          {
            name: 'color',
            type: 'ColorProps',
            required: false,
            default: 'bulma.100',
            description: 'Text color',
          },
          {
            name: 'backgroundColor',
            type: 'ColorProps',
            required: false,
            default: 'gohan.100',
            description: 'Background color',
          },
        ]}
      />
    </>
  );
};

export default PageAvatar;
