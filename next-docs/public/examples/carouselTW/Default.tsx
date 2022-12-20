import { mergeClassnames } from '@heathmont/moon-core-tw';
import { Carousel } from '@heathmont/moon-core-tw';
import { ControlsChevronLeft, ControlsChevronRight } from '@heathmont/moon-icons-tw';

const Example = () => {
  const items = Array.from({ length: 25 }, (index) => index);
  return (
    <Carousel
      scrollTo={5}
    >
      <Carousel.LeftArrow>
        <ControlsChevronLeft />
      </Carousel.LeftArrow>
      {items.map((item, index) => (
        <Carousel.Item key={index} className="w-[320px] h-[192px] flex bg-[darkgray] rounded-[0.5rem] items-center justify-center hi">{index}</Carousel.Item>
      ))}
      <Carousel.RightArrow>
        <ControlsChevronRight />
      </Carousel.RightArrow>
    </Carousel>
  );
};

export default Example;
