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
    <div className="relative z-5 flex flex-col gap-12">
      <OpenSourceBadge />
      <div className="flex flex-col gap-16">
        <PageTitle />
        <div className="flex flex-col lg:flex-row gap-4 2xl:fixed 2xl:top-12 2xl:right-12 2xl:z-10">
          <ForDevelopers />
          <ForDesigners />
        </div>
        <Updates />
        <Future />
        <Contributors />
      </div>
    </div>
    <MoonAndEarthAnimation />
  </>
);

export default Home;
