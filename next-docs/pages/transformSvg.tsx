import { ReactNode } from 'react';
import Layout from '../components/Layout';
import PageSection from '../components/PageSection';
import TransformIcon from '../public/transformIcon/TransformIcon';

const PageTransformSvg = () => (
  <>
    <h1 className="text-moon-32 font-medium">
      Transform SVG into React components
    </h1>
    <PageSection>
      <TransformIcon />
    </PageSection>
  </>
);

PageTransformSvg.getLayout = function getLayout(page: ReactNode) {
  return <Layout title="Transform SVG">{page}</Layout>;
};

export default PageTransformSvg;
