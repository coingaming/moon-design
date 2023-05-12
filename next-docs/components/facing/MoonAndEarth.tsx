import React from 'react';
import { useViewportScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import imageEarth from '../../public/earth.png';
import imageMoon from '../../public/moon.png';
import { useRtl } from '../rtl/RtlProvider';

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
  const { rtlEnabled } = useRtl();
  const position = useTransform(scrollYProgress, [0, 1], [-500, -700]);
  const className = rtlEnabled ? 'origin-top-right' : 'origin-top-left';
  const earthStyle = rtlEnabled
    ? { scale: earthScale, left: position }
    : { scale: earthScale, right: position };
  const moonStyle = rtlEnabled
    ? { scale: moonScale, left: position }
    : { scale: moonScale, right: position };
  return (
    <>
      {/* Earth background image */}
      <motion.div
        style={earthStyle}
        className={`${className} fixed z-1 top-72 w-5/12`}
      >
        <Image src={imageEarth} alt="Earth" />
      </motion.div>

      {/* Moon background image */}
      <motion.div
        style={moonStyle}
        className={`${className} fixed top-60 w-5/12`}
      >
        <Image src={imageMoon} alt="Moon" />
      </motion.div>
    </>
  );
};

export default MoonAndEarthAnimation;
