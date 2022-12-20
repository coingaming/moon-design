import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import CustomizedArrow from '../../public/examples/carouselTW/CustomizedArrow';
import Default from '../../public/examples/carouselTW/Default';
import Indicators from '../../public/examples/carouselTW/Indicators';
import Spaces from '../../public/examples/carouselTW/Spaces';
import useExamples from '../../utils/useExamples';

export default function PageCarousel() {
  const examples = useExamples('carousel');

  return (
    <>
      <ComponentPageDescription title="Carousel">
        <p>
          An interactive extension of the Reel component to cycle through
          content.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Carousel"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Customized Arrows"
        preview={<CustomizedArrow />}
        code={examples ? examples.CustomizedArrow : 'Loading'}
      />
      <Preview
        title="Indicators"
        preview={<Indicators />}
        code={examples ? examples.Indicators : 'Loading'}
      />
      <Preview
        title="Spaces"
        preview={<Spaces />}
        code={examples ? examples.Spaces : 'Loading'}
      />
      <PropsTable
        title="Carousel props"
        data={[
          {
            name: 'scrollTo',
            type: 'number',
            required: false,
            default: '-',
            description: 'Index of item to scroll to',
          },
          {
            name: 'step',
            type: 'number',
            required: false,
            default: '5',
            description: 'Step of scroll',
          },
          {
            name: 'selectedIndex',
            type: 'number',
            required: false,
            default: '-',
            description: 'Index of selected item',
          },
        ]}
      />
    </>
  );
}
