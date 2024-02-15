import { ReactNode } from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import type { ComponentNames } from '../../components/getComponent';
import Layout from '../../components/Layout';
import PropsTable from '../../components/PropsTable';
import Autoslide from '../../public/examples/carousel/Autoslide';
import CustomizedArrow from '../../public/examples/carousel/CustomizedArrow';
import Default from '../../public/examples/carousel/Default';
import Indicators from '../../public/examples/carousel/Indicators';
import Rtl from '../../public/examples/carousel/Rtl';
import SelectIndex from '../../public/examples/carousel/SelectIndex';
import Spaces from '../../public/examples/carousel/Spaces';
import VisibleIndex from '../../public/examples/carousel/VisibleIndex';
import useComponent from '../../utils/useComponent';

const COMPONENT_NAME: ComponentNames = 'Carousel';

const PageCarousel = () => {
  const { examples, name, text, image } = useComponent(COMPONENT_NAME);
  return (
    <>
      <ComponentPageDescription title={name} image={image} isAriaSupport>
        <p>{text}</p>
        <p>
          It not only helps in saving screen space, but also encourages visitors
          to focus on important website content and improves the overall visual
          appeal effectively.
        </p>
        <p>
          To support Arabic languages this component requires setting up isRtl
          prop directly.
        </p>
      </ComponentPageDescription>
      <ComponentAnatomy>
        {`<Carousel>
  <Carousel.LeftArrow>...</Carousel.LeftArrow>
  <Carousel.Reel>
    <Carousel.Item>...</Carousel.Item>
  <Carousel.Reel>
  <Carousel.Indicators/>
  </Carousel.RightArrow>...</Carousel.RightArrow>
</Carousel>`}
      </ComponentAnatomy>
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
      <Preview
        title="Visible indices"
        preview={<VisibleIndex />}
        code={examples ? examples.VisibleIndex : 'Loading'}
      />
      <Preview
        title="Select index"
        preview={<SelectIndex />}
        code={examples ? examples.SelectIndex : 'Loading'}
      />
      <Preview
        title="Autoslide"
        preview={<Autoslide />}
        code={examples ? examples.Autoslide : 'Loading'}
      />
      <Preview
        title="Rtl support"
        preview={<Rtl />}
        code={examples ? examples.Rtl : 'Loading'}
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
          {
            name: 'Render Props: ',
            type: '',
            required: undefined,
            default: '',
            description: '',
          },
          {
            name: 'scrollLeftToStep',
            type: '() => void',
            required: false,
            default: '-',
            description: 'Scrolls left',
          },
          {
            name: 'scrollRightToStep',
            type: '() => void',
            required: false,
            default: '-',
            description: 'Scrolls right',
          },
          {
            name: 'canScrollLeft',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Whether can scroll left',
          },
          {
            name: 'canScrollRight',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Whether can scroll right',
          },
          {
            name: 'firstVisibleIndex',
            type: 'number',
            required: false,
            default: '-',
            description: 'Index of the first visible item',
          },
          {
            name: 'lastVisibleIndex',
            type: 'number',
            required: false,
            default: '-',
            description: 'Index of the last visible item',
          },
          {
            name: 'autoSlideDelay',
            type: 'number',
            required: false,
            default: '-',
            description:
              'Interval of auto sliding in milliseconds. No auto sliding if undefined',
          },
          {
            name: 'isRtl',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Set right to left (rtl) view',
          },
        ]}
      />
    </>
  );
};

PageCarousel.getLayout = function getLayout(page: ReactNode) {
  return <Layout title={`Components | ${COMPONENT_NAME}`}>{page}</Layout>;
};

export default PageCarousel;
