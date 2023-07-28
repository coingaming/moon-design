import { ReactNode } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import ManifestCard from '../components/ManifestCard';
import Logo from '../components/sidebar/Logo';
import SameDifferentSignature from '../components/sidebar/SameDifferentSignature';
import imageMoon from '../public/moon.png';

const PageManifest = () => (
  <>
    <div className="relative text-bulma">
      <div className="absolute z-10 ltr:left-0 rtl:right-0 top-0">
        <Logo />
      </div>
      <div className="relative z-10 max-w-md">
        <SameDifferentSignature />
      </div>
    </div>
    <div className="relative z-10 grow flex flex-col xl:flex-row gap-12">
      <h2 className="xl:self-end text-moon-72 font-medium text-bulma">Why?</h2>
      <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 gap-6 relative">
        <div className="flex flex-col justify-start gap-6">
          <ManifestCard
            title="Consistent among different brands"
            contentItems={[
              'Same interaction and UI among different modules and sections (e.g. Cashier, Sidebar, Reg, Inputs etc)',
              'Theming',
            ]}
            isHighlighted
          />
          <ManifestCard
            title="Validating ideas/hypotheses for stakeholders"
            contentItems={[
              'You can build your own UI app (Rapid Proto) faster and not from scratch',
              'Benefit for hackathons',
              'Quality',
            ]}
          />
        </div>
        <div className="flex flex-col justify-start gap-6">
          <ManifestCard
            title="Reducing development costs"
            contentItems={[
              "Devs from different teams don't need to implement the elements provided by Moon DS",
              'There will be less time spent on discussions/alignment between devs and design',
              "Designers don't need to create new elements for every project/task",
              'Well-documented components library',
              'Avoiding mistakes and bugs',
            ]}
          />
          <ManifestCard
            title="Performance"
            contentItems={[
              'Best practices across different brands',
              'Lightweight (Less JS = more performance)',
            ]}
          />
        </div>
        <div className="flex flex-col justify-start">
          <ManifestCard
            title="Faster UI development"
            contentItems={[
              'One place for all UI components (Source of truth)',
              'Consistent icons',
              'Non-frontend developers could build nice UI using Moon DS',
            ]}
          />
        </div>
      </div>
    </div>
    <div className="hidden xl:block fixed top-0 ltr:right-0 rtl:left-0 w-[650px] 2xl:w-[892px] ltr:translate-x-1/3 rtl:-translate-x-1/3 -translate-y-1/3">
      <Image src={imageMoon} alt="Moon" />
    </div>
  </>
);

export default PageManifest;

PageManifest.getLayout = function getLayout(page: ReactNode) {
  return <Layout title="Manifest">{page}</Layout>;
};
