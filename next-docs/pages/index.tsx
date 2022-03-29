import React from 'react';
import { Heading, Text } from '@heathmont/moon-core';
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
    <Heading as="h1" size={64}>
      Moon design system.
    </Heading>
    <Text size={24} className="max-w-2xl mt-4">
      Moon is Yolo Group product design system that helps us maintain the
      integrity of their user experience and optimize design and development
      resources.
    </Text>
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
      <Heading
        as="h2"
        size={32}
        className="mt-20 bg-background relative py-1 rounded-lg lg:whitespace-nowrap lg:w-min"
      >
        {title}
      </Heading>
    )}

    {description && (
      <Text
        size={32}
        className="bg-background relative pr-4 py-1 lg:whitespace-nowrap lg:w-min"
      >
        {description}
      </Text>
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
