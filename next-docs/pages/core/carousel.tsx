import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from "../../components/PropsTable";
import CustomizedControls from "../../public/examples/carouselTW/CustomizedControls";
import Default from '../../public/examples/carouselTW/Default';
import DefaultControls from "../../public/examples/carouselTW/DefaultControls";
import Rtl from "../../public/examples/carouselTW/Rtl";
import Sizes from "../../public/examples/carouselTW/Sizes";
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('carouselTW');

  return (
    <div className="flex flex-col gap-2 theme-sb-light">
      <ComponentPageDescription title="Carousel">
        <p>
          Is an effective way of displaying multiple images or content in a single space.
        </p>
        <p>
          It not only helps in saving screen space, but also encourages visitors to focus on important website content and improves the overall visual appeal effectively.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="RTL Carousel"
        preview={<Rtl />}
        code={examples ? examples.Rtl : 'Loading'}
      />
      <Preview
        title="Default Controls"
        preview={<DefaultControls />}
        code={examples ? examples.DefaultControls : 'Loading'}
      />
      <Preview
        title="Customized Controls"
        preview={<CustomizedControls />}
        code={examples ? examples.CustomizedControls : 'Loading'}
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
            name: 'space',
            type: '2xs | xs | sm | md | lg',
            required: false,
            default: '',
            description: '-',
          },
          {
            name: 'items',
            type: 'React.ReactNode',
            required: false,
            default: '',
            description: 'Items to display inside carousel',
          },
          {
            name: 'scrollToLeftButton',
            type: '({ scrollToStep, disabled }: { { scrollToStep: function, disabled: boolean } }) => React.ReactElement',
            required: false,
            default: '',
            description: 'Scroll to left button',
          },
          {
            name: 'scrollToRightButton',
            type: '({ scrollToStep, disabled }: { { scrollToStep: function, disabled: boolean } }) => React.ReactElement',
            required: false,
            default: '',
            description: 'Scroll to right button',
          },
        ]}
      />
    </div>
  );
};

export default Example;
