import React from 'react';

import Future from '../components/facing/Future';
import ForDesigners from '../components/facing/ForDesigners';
import ForDevelopers from '../components/facing/ForDevelopers';
import Contributors from '../components/facing/Contributors';
import News from '../components/facing/News';
import Logo from '../components/sidebar/Logo';
import MoonAndEarthAnimation from '../components/facing/MoonAndEarth';
import Footer from '../components/Footer';

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
      Moon is Yolo Group product design system that helps us maintain the
      integrity of their user experience and optimize design and development
      resources.
    </p>
  </>
);

const SubHeader: React.FC<any> = ({ title, description }) => (
  <>
    <h2 className="mt-20 tracking-tight text-4xl font-semibold bg-background relative w-min whitespace-nowrap py-1 rounded-lg">
      {title}
    </h2>
    <p
      className="text-4xl tracking-tight bg-background relative w-min whitespace-nowrap
       pr-4 py-1 "
    >
      {description}
    </p>
  </>
);

export default function Home() {
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

      {/* <ForDesigners />
      <ForDevelopers /> */}

      <MoonAndEarthAnimation />

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
    </>
  );
}
