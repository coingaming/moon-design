import { Carousel } from "@heathmont/moon-core-tw";

type RenderProps = {
  scrollLeftToStep: () => void;
  scrollRightToStep: () => void;
  canScrollLeft: boolean;
  canScrollRight: boolean;
}

const Example = () => {
  const items = Array.from({ length: 25 }, (index) => index);
  return (
    <Carousel
      scrollTo={5}
    >
      {({scrollLeftToStep, scrollRightToStep, canScrollLeft, canScrollRight}: RenderProps) => (
        <>
          <button onClick={scrollLeftToStep} disabled={!canScrollLeft}>
            Scroll to left
          </button>
          <Carousel.Reel>
            {items.map((_, index) => (
              <Carousel.Item key={index} className="w-80 h-48">{index}</Carousel.Item>
            ))}
          </Carousel.Reel>
          <button onClick={scrollRightToStep} disabled={!canScrollRight}>
            Scroll to Right
          </button>
        </>
      )}
    </Carousel>
  );
};

export default Example;
