import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import Customization from '../../public/examples/alert/Customization';
import Default from '../../public/examples/alert/Default';
import HandleClose from '../../public/examples/alert/HandleClose';
import WithClose from '../../public/examples/alert/WithClose';
import WithIcon from '../../public/examples/alert/WithIcon';
import WithIconAndClose from '../../public/examples/alert/WithIconAndClose';
import WithTitle from '../../public/examples/alert/WithTitle';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('alert');
  const { name, text, image } = getComponent('Alert');
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
      <ComponentAnatomy>
        {`<Alert>
  <Alert.Title>...</Alert.Title>
  <Alert.Message>...</Alert.Message>
  <Alert.Close />
</Alert>`}
      </ComponentAnatomy>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="With title"
        preview={<WithTitle />}
        code={examples ? examples.WithTitle : 'Loading'}
      />
      <Preview
        title="With icon"
        preview={<WithIcon />}
        code={examples ? examples.WithIcon : 'Loading'}
      />
      <Preview
        title="With close"
        preview={<WithClose />}
        code={examples ? examples.WithClose : 'Loading'}
      />
      <Preview
        title="With icon and close"
        preview={<WithIconAndClose />}
        code={examples ? examples.WithIconAndClose : 'Loading'}
      />
      <Preview
        title="Handle close"
        preview={<HandleClose />}
        code={examples ? examples.HandleClose : 'Loading'}
      />
      <Preview
        title="Customization"
        preview={<Customization />}
        code={examples ? examples.Customization : 'Loading'}
      />
      <PropsTable
        title="Alert props"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
        ]}
      />
      <PropsTable
        title="Alert.Title props"
        data={[
          {
            name: 'children',
            type: 'string | React.ReactNode',
            required: false,
            default: '-',
            description: 'Children content',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
        ]}
      />
      <PropsTable
        title="Alert.Message props"
        data={[
          {
            name: 'children',
            type: 'string | React.ReactNode',
            required: false,
            default: '-',
            description: 'Children content',
          },
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description: 'Tailwind classes for customization',
          },
        ]}
      />
    </>
  );
};

export default Example;
