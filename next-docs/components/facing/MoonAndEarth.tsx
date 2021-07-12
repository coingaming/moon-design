import React from 'react';
import Image from 'next/image';
import { useViewportScroll, useTransform } from 'framer-motion';

import imageMoon from '../../public/moon.png';
import imageEarth from '../../public/earth.png';

const MoonAndEarthAnimation = () => {
  const { scrollYProgress } = useViewportScroll();
  const earthScale = useTransform(
    scrollYProgress,
    (scrollYProgress) => 1 + scrollYProgress * 2
  );
  const moonScale = useTransform(
    scrollYProgress,
    (scrollYProgress) => 1 - scrollYProgress * 0.5
  );

  const [hookedEarthScale, setHookedEarthScale] = React.useState(1);
  const [hookedMoonScale, setHookedMoonScale] = React.useState(1);
  React.useEffect(() => {
    const unsubscribeEarthScale = earthScale.onChange((v) =>
      setHookedEarthScale(v)
    );
    const unsubscribeMoonScale = moonScale.onChange((v) =>
      setHookedMoonScale(v)
    );
    return () => {
      unsubscribeEarthScale();
      unsubscribeMoonScale();
    };
  }, [earthScale, moonScale]);

  return (
    <>
      {/* Moon background image */}
      <div
        style={{ transform: `scale(${hookedEarthScale})` }}
        className="fixed right-0 top-300 z-20 w-5/12"
      >
        <Image src={imageEarth} alt="Earth" />
      </div>

      {/* Moon background image */}
      <div
        style={{ transform: `scale(${hookedMoonScale}` }}
        className="fixed right-0 top-250 z-10 w-5/12"
      >
        <Image src={imageMoon} alt="Moon" />
      </div>
    </>
  );
};

export default MoonAndEarthAnimation;