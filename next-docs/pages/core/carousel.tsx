import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import CustomizedArrow from '../../public/examples/carouselTW/CustomizedArrow';
import Default from '../../public/examples/carouselTW/Default';
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
    </>
  );
}
