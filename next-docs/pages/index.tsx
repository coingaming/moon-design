import React from 'react';

import Image from 'next/image';

import { useViewportScroll, useTransform } from 'framer-motion';

import imageMoon from '../public/moon.png';
import imageEarth from '../public/earth.png';

import Future from '../components/facing/Future';
import ForDesigners from '../components/facing/ForDesigners';
import ForDevelopers from '../components/facing/ForDevelopers';
import Contributors from '../components/facing/Contributors';
import News from '../components/facing/News';
import Logo from '../components/sidebar/Logo';

const OpenSourceBadge = () => (
  <span className="block w-min whitespace-nowrap mb-8 text-active bg-active-80 uppercase tracking-widest py-2 px-4 rounded-lg font-bold">
    Open Source
  </span>
);

const Header = () => (
  <>
    <h1 className="text-6xl text-black tracking-tight font-semibold">
      Moon design system.
    </h1>
    <p className="text-2xl max-w-2xl mt-4 tracking-tight">
      Moon is Coingaming's product design system that helps us maintain the
      integrity of their user experience and optimize design and development
      resources.
    </p>
  </>
);

const SubHeader = ({ title, description }) => (
  <>
    <h2 className="mt-20 tracking-tight text-4xl font-semibold bg-background relative z-10 w-min whitespace-nowrap py-1 rounded-lg z-20">
      {title}
    </h2>
    <p
      className="text-4xl tracking-tight bg-background relative z-10 w-min whitespace-nowrap
       pr-4 py-1 bg-opacity-25 z-20"
    >
      {description}
    </p>
  </>
);

const Footer = () => (
  <footer className="flex items-center">
    <div className="mr-36">
      <Logo />
    </div>
    <a className="mr-16 hover:underline cursor-pointer">Slack</a>
    <a className="hover:underline cursor-pointer">Medium</a>
    <p className="ml-auto mr-36">With the help of Coingaming</p>
  </footer>
);

export default function Home() {
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
      <OpenSourceBadge />

      <Header />

      <SubHeader
        title="Updates."
        description="Explore our community features"
      />

      <div className="mt-12">
        <News />
      </div>

      <ForDesigners />
      <ForDevelopers />

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

      <section className="mt-20">
        <Future />
      </section>

      <SubHeader
        title="In the Spotlight."
        description="The team who design Moon."
      />

      <div className="mt-12">
        <Contributors />
      </div>

      <div className="mt-36">
        <Footer />
      </div>
    </>
  );
}
