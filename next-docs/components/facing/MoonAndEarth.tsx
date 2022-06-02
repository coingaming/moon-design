import React from 'react';
import { useViewportScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import imageEarth from '../../public/earth.png';
import imageMoon from '../../public/moon.png';

const MoonAndEarthAnimation = () => {
  const { scrollYProgress } = useViewportScroll();
  const earthScale = useTransform(
    scrollYProgress,
    (scrollYProgress) => 0.3 + scrollYProgress * 0.5
  );
  const moonScale = useTransform(
    scrollYProgress,
    (scrollYProgress) => 1 - scrollYProgress * 0.6
  );
  const right = useTransform(scrollYProgress, [0, 1], [-500, -700]);
  return (
    <>
      {/* Earth background image */}
      <motion.div
        style={{ scale: earthScale, top: 300, right }}
        className="origin-top-left fixed z-1 w-5/12"
      >
        <Image src={imageEarth} alt="Earth" />
      </motion.div>

      {/* Moon background image */}
      <motion.div
        style={{ scale: moonScale, top: 250, right }}
        className="origin-top-left fixed w-5/12"
      >
        <Image src={imageMoon} alt="Moon" />
      </motion.div>
    </>
  );
};

export default MoonAndEarthAnimation;
