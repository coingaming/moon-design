import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from "../../components/PropsTable";
import Default from '../../public/examples/carouselTW/Default';
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
      {/*<Preview
        title="RTL Carousel"
        preview={<Rtl />}
        code={examples ? examples.Rtl : 'Loading'}
      />
      <Preview
        title="Customized Arrows"
        preview={<CustomizedArrow />}
        code={examples ? examples.CustomizedArrow : 'Loading'}
      />
      <Preview
        title="Space"
        preview={<Space />}
        code={examples ? examples.Space : 'Loading'}
      />
      <Preview
        title="Visible indices"
        preview={<VisibleIndex />}
        code={examples ? examples.VisibleIndex : 'Loading'}
      />*/}
      <PropsTable
        title="Props"
        data={[
          {
            name: 'space',
            type: 'xlarge |',
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
