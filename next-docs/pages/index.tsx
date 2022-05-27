import React from 'react';
import Contributors from '../components/facing/Contributors';
import ContributorsDevelopers from '../components/facing/ContributorsDevelopers';
import ForDesigners from '../components/facing/ForDesigners';
import ForDevelopers from '../components/facing/ForDevelopers';
import Future from '../components/facing/Future';
import MoonAndEarthAnimation from '../components/facing/MoonAndEarth';
import News from '../components/facing/News';

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

interface SubHeaderProps {
  title?: string;
  description?: string;
}

const SubHeader: React.FC<SubHeaderProps> = ({
  title,
  description,
}: SubHeaderProps) => (
  <>
    {title && (
      <h2 className="mt-20 tracking-tight text-4xl font-semibold bg-gohan relative py-1 rounded-lg lg:whitespace-nowrap lg:w-min">
        {title}
      </h2>
    )}

    {description && (
      <p className="text-4xl tracking-tight bg-gohan relative  pr-4 py-1 lg:whitespace-nowrap lg:w-min">
        {description}
      </p>
    )}
  </>
);

const Home = () => (
  <>
    <OpenSourceBadge />

    <Header />

    <ForDesigners />
    <ForDevelopers />

    <SubHeader title="Updates." description="Explore our community features" />

    <div className="mt-12">
      <News />
    </div>

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

    <div className="mt-12">
      <ContributorsDevelopers />
    </div>
  </>
);

export default Home;
