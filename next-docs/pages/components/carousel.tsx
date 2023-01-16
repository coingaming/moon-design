import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import PropsTable from '../../components/PropsTable';
import CustomizedArrow from '../../public/styledExamples/carousel/CustomizedArrow';
import Default from '../../public/styledExamples/carousel/Default';
import Rtl from '../../public/styledExamples/carousel/Rtl';
import Space from '../../public/styledExamples/carousel/Space';
import VisibleIndex from '../../public/styledExamples/carousel/VisibleIndex';
import useExamples from '../../utils/useExamples';

export default function PageCarousel() {
  const examples = useExamples('carousel', 'styled');

  return (
    <>
      <ComponentPageDescription title="Carousel">
        <DeprecationWarning href="/core/carousel" name="Carousel" />
      </ComponentPageDescription>
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
