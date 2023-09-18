import { Tag } from '@heathmont/moon-core-tw';
import dynamic from 'next/dynamic';
import Contributors from '../components/facing/Contributors';
import ForDesigners from '../components/facing/ForDesigners';
import ForDevelopers from '../components/facing/ForDevelopers';
import Future from '../components/facing/Future';
import PageTitle from '../components/facing/PageTitle';
import Updates from '../components/facing/Updates';
import Layout from '../components/Layout';

const MoonAndEarthAnimation = dynamic(
  () => import('../components/facing/MoonAndEarth')
);

const PageHome = () => (
  <>
    <div className="relative z-5 flex flex-col gap-12">
      <Tag size="2xs" className="self-start">
        Open Source
      </Tag>
      <div className="flex flex-col gap-16">
        <PageTitle />
        <div className="flex flex-col lg:flex-row gap-4 3xl:fixed 3xl:top-12 3xl:end-12 3xl:z-10">
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

PageHome.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default PageHome;
