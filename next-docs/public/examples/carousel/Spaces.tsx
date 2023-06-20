import { Carousel } from '@heathmont/moon-core-tw';
import {
  ControlsChevronLeftSmall,
  ControlsChevronRightSmall,
} from '@heathmont/moon-icons-tw';

const Example = () => {
  const items = Array.from({ length: 5 }, (index) => index);
  return (
    <Carousel>
      <Carousel.LeftArrow>
        <ControlsChevronLeftSmall />
      </Carousel.LeftArrow>
      <Carousel.Reel className="gap-10">
        {items.map((_, index) => (
          <Carousel.Item key={index} className="w-80 h-48">
            {index}
          </Carousel.Item>
        ))}
      </Carousel.Reel>
      <Carousel.RightArrow>
        <ControlsChevronRightSmall />
      </Carousel.RightArrow>
    </Carousel>
  );
};

export default Example;
