import { Tag } from '@heathmont/moon-core-tw';
import Contributors from '../components/facing/Contributors';
import ForDesigners from '../components/facing/ForDesigners';
import ForDevelopers from '../components/facing/ForDevelopers';
import Future from '../components/facing/Future';
import MoonAndEarthAnimation from '../components/facing/MoonAndEarth';
import PageTitle from '../components/facing/PageTitle';
import Updates from '../components/facing/Updates';

const Home = () => (
  <>
    <div className="relative z-5 flex flex-col gap-12">
      <Tag size="2xs" className="self-start">
        Open Source
      </Tag>
      <div className="flex flex-col gap-16">
        <PageTitle />
        <div className="flex flex-col lg:flex-row gap-4 3xl:fixed 3xl:top-12 ltr:3xl:right-12 rtl:3xl:left-12 3xl:z-10">
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
