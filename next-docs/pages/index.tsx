import React from 'react';
import Contributors from '../components/facing/Contributors';
import ForDesigners from '../components/facing/ForDesigners';
import ForDevelopers from '../components/facing/ForDevelopers';
import Future from '../components/facing/Future';
import MoonAndEarthAnimation from '../components/facing/MoonAndEarth';
import OpenSourceBadge from '../components/facing/OpenSourceBadge';
import PageTitle from '../components/facing/PageTitle';
import Updates from '../components/facing/Updates';

const Home = () => (
  <>
    <div className="flex flex-col gap-12">
      <OpenSourceBadge />
      <div className="flex flex-col gap-16">
        <PageTitle />
        <Updates />
        <Future />
        <Contributors />
      </div>
    </div>
    <ForDesigners />
    <ForDevelopers />
    <MoonAndEarthAnimation />
  </>
);

export default Home;
