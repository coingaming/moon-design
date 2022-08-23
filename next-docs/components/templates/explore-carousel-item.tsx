import React, {useEffect, useState} from "react";
import Image from "next/image";

const smallBreakpoint = 1024;

const ExploreCarouselItem = ({
 items = [],
}: {
  items: Array<{ image: any; title: string }>;
}) => {
  const [itemWidth, setItemWidth] = useState(160);
  const [itemHeight, setItemHeight] = useState(200);

  useEffect(() => {
    const resizeItems = () => {
      if (window?.innerWidth) {
        setItemWidth(window.innerWidth <= smallBreakpoint ? 160 : 280);
        setItemHeight(window.innerWidth <= smallBreakpoint ? 180 : 317);
      }
    };

    resizeItems();

    window.addEventListener('resize', resizeItems);

    return () => {
      window.removeEventListener('resize', resizeItems);
    };
  }, []);

  return (<div className="w-full h-full flex p-6">
    <div className="w-[160px] me-4 flex flex-col items-stretch lg:w-[272px]">
      <div className="h-16"/>
      <div className="w-[160px] h-[180px] grow-1 mb-4 relative rounded-lg lg:w-[272px] lg:h-[316px]">
        <Image src={items[0]?.image} width={itemWidth} height={itemHeight}/>
        <div
          className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
          <p className="text-moon-18 font-semibold m-4 w-full text-goten">
            {items[0]?.title}
          </p>
        </div>
      </div>
      <div className="w-[160px] h-[180px] grow-1 relative rounded-lg lg:w-[272px] lg:h-[316px]">
        <Image src={items[1]?.image} width={itemWidth} height={itemHeight}/>
        <div
          className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
          <p className="text-moon-18 font-semibold m-4 w-full text-goten">
            {items[1]?.title}
          </p>
        </div>
      </div>
    </div>
    <div className="w-[160px] me-5 flex flex-col items-stretch lg:w-[272px]">
      <div className="w-[160px] h-[180px] grow-1 mb-4 relative rounded-lg lg:w-[272px] lg:h-[316px]">
        <Image src={items[2]?.image} width={itemWidth} height={itemHeight}/>
        <div
          className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
          <p className="text-moon-18 font-semibold m-4 w-full text-goten">
            {items[2]?.title}
          </p>
        </div>
      </div>
      <div className="w-[160px] h-[180px] grow-1 relative rounded-lg lg:w-[272px] lg:h-[316px]">
        <Image src={items[3]?.image} width={itemWidth} height={itemHeight}/>
        <div
          className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
          <p className="text-moon-18 font-semibold m-4 w-full text-goten">
            {items[3]?.title}
          </p>
        </div>
      </div>
      <div className="h-16"/>
    </div>
  </div>);
};

export default ExploreCarouselItem;
