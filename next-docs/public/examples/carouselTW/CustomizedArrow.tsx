// @ts-nocheck
import { Carousel } from "@heathmont/moon-core-tw";

const Example = () => {
  const items = Array.from({ length: 25 }, (index) => index);
  return (
    <Carousel
      scrollTo={5}
    >
      {({scrollLeftToStep, scrollRightToStep}) => (
        <>
          <button onClick={scrollLeftToStep}>
            Scroll to left
          </button>
          <Carousel.Reel>
            {items.map((_, index) => (
              <Carousel.Item key={index} className="w-[320px] h-[192px] flex bg-[darkgray] rounded-[0.5rem] items-center justify-center">{index}</Carousel.Item>
            ))}
          </Carousel.Reel>
          <button onClick={scrollRightToStep}>
            Scroll to Right
          </button>
        </>
      )}
    </Carousel>
  );
};

export default Example;
