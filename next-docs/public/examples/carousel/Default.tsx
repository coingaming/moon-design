import { Carousel } from '@heathmont/moon-core-tw';
import {
  ControlsChevronLeftSmall,
  ControlsChevronRightSmall,
} from '@heathmont/moon-icons-tw';

const Example = () => {
  const items = Array.from({ length: 25 }, (index) => index);
  return (
    <Carousel scrollTo={5}>
      <Carousel.LeftArrow>
        <ControlsChevronLeftSmall />
      </Carousel.LeftArrow>
      <Carousel.Reel>
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
