import React from 'react';
import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
import CustomizedArrow from '../../public/examples/carousel/CustomizedArrow';
import Default from '../../public/examples/carousel/Default';
import Rtl from '../../public/examples/carousel/Rtl';
import Space from '../../public/examples/carousel/Space';
import VisibleIndex from '../../public/examples/carousel/VisibleIndex';
import useExamples from '../../utils/useExamples';

export default function PageCarousel() {
  const examples = useExamples('carousel');

  return (
    <>
      <h1 className="text-moon-32 font-medium">Carousel</h1>
      <div className="flex flex-col gap-2 max-w-screen-sm">
        <p className="text-moon-16">
          An interactive extension of the Reel component to cycle through
          content.
        </p>
      </div>
      <Preview
        title="Carousel"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
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
      />
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
    </>
  );
}
