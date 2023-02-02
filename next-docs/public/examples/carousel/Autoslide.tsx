import { Carousel } from '@heathmont/moon-core-tw';

const Example = () => {
  const items = Array.from({ length: 25 }, (index) => index);
  return (
    <Carousel autoSlideDelay={3000} step={1}>
      <Carousel.Reel>
        {items.map((_, index) => (
          <Carousel.Item key={index} className="w-80 h-48">
            {index}
          </Carousel.Item>
        ))}
      </Carousel.Reel>
    </Carousel>
  );
};

export default Example;
