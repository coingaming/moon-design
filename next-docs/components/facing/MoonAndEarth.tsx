import React from 'react';
import Image from 'next/image';
import { useViewportScroll, useTransform, motion } from 'framer-motion';

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
  const earthRight = useTransform(
    scrollYProgress,
    (scrollYProgress) => -scrollYProgress * 1000
  );

  return (
    <>
      {/* Moon background image */}
      <motion.div
        style={{ scale: earthScale, top: 300, right: earthRight }}
        className="fixed z-20 w-5/12"
      >
        <Image src={imageEarth} alt="Earth" />
      </motion.div>

      {/* Moon background image */}
      <motion.div
        style={{ top: 250, right: 0, scale: moonScale }}
        className="fixed z-10 w-5/12"
      >
        <Image src={imageMoon} alt="Moon" />
      </motion.div>
    </>
  );
};

export default MoonAndEarthAnimation;
