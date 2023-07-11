import { Carousel } from '@heathmont/moon-core-tw';
import {
  ControlsChevronLeftSmall,
  ControlsChevronRightSmall,
} from '@heathmont/moon-icons-tw';

type RenderProps = {
  firstVisibleIndex?: number;
  lastVisibleIndex?: number;
};

const Example = () => {
  const items = Array.from({ length: 25 }, (index) => index);
  return (
    <Carousel>
      {({ firstVisibleIndex, lastVisibleIndex }: RenderProps) => (
        <>
          <Carousel.LeftArrow>
            <ControlsChevronLeftSmall />
          </Carousel.LeftArrow>
          <Carousel.Reel>
            {items.map((_, index) => (
              <Carousel.Item key={index} className="w-80 h-48">
                {`${firstVisibleIndex}-${lastVisibleIndex}`}
              </Carousel.Item>
            ))}
          </Carousel.Reel>
          <Carousel.RightArrow>
            <ControlsChevronRightSmall />
          </Carousel.RightArrow>
        </>
      )}
    </Carousel>
  );
};

export default Example;
