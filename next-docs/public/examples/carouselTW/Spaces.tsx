import { Carousel } from '@heathmont/moon-core-tw';
import { ControlsChevronLeft, ControlsChevronRight } from '@heathmont/moon-icons-tw';

const Example = () => {
  const items = Array.from({ length: 5 }, (index) => index);
  return (
    <Carousel
    >
      <Carousel.LeftArrow>
        <ControlsChevronLeft />
      </Carousel.LeftArrow>
      <Carousel.Reel className="gap-10">
        {items.map((_, index) => (
          <Carousel.Item key={index} className="w-[320px] h-[192px] flex bg-gohan rounded-[0.5rem] items-center justify-center shink-0">{index}</Carousel.Item>
        ))}
      </Carousel.Reel>
      <Carousel.RightArrow>
        <ControlsChevronRight />
      </Carousel.RightArrow>
    </Carousel>
  );
};

export default Example;
