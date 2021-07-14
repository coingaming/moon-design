import React from 'react';
import Image from 'next/image';
import {
  useViewportScroll,
  useTransform,
  motion,
} from 'framer-motion';

import imageMoon from '../../public/moon.png';
import imageEarth from '../../public/earth.png';

const MoonAndEarthAnimation = () => {
  const { scrollYProgress } = useViewportScroll();
  const earthScale = useTransform(
    scrollYProgress,
    (scrollYProgress) => 0.3 + scrollYProgress * 2
  );
  const moonScale = useTransform(
    scrollYProgress,
    (scrollYProgress) => 1 - scrollYProgress * 0.6
  );
  const right = useTransform(scrollYProgress, [0, 1], [-100, -300]);

  return (
    <>
      {/* Earth background image */}
      <motion.div
        style={{ scale: earthScale, top: 300, right }}
        className="origin-top-left fixed z-20 w-5/12"
      >
        <Image src={imageEarth} alt="Earth" />
      </motion.div>

      {/* Moon background image */}
      <motion.div
        style={{ scale: moonScale, top: 250, right }}
        className="origin-top-left fixed z-10 w-5/12"
      >
        <Image src={imageMoon} alt="Moon" />
      </motion.div>
    </>
  );
};

export default MoonAndEarthAnimation;
