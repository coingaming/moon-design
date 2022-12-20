import { Carousel } from "@heathmont/moon-core-tw";

const Example = () => {
  const items = Array.from({ length: 25 }, (index) => index);
  return (
    <Carousel
      scrollTo={5}
      className="my-7"
    >
      <Carousel.LeftArrow className="top-0 border-none bg-none shadow-none moon-text-14">
        Scroll to left
      </Carousel.LeftArrow>
      {items.map((item, index) => (
        <Carousel.Item key={index} className="w-[320px] h-[192px] flex bg-[darkgray] rounded-[0.5rem] items-center justify-center">{index}</Carousel.Item>
      ))}
      <Carousel.RightArrow className="bottom-0 top-auto shadow-none bg-none border-none moon-text-14 left-0 right-auto m-0">
        Scroll to Right
      </Carousel.RightArrow>
    </Carousel>
  );
};

export default Example;
