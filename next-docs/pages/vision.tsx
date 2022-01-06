import { ReactNode } from 'react';
import VisionLayout from '../components/VisionLayout';

const Header = () => (
  <>
    <h1 className="text-6xl text-white tracking-tight font-semibold">
      Build the best products faster.
    </h1>
  </>
);

export default function PageVision() {
  return (
    <div className="">
      <Header />
    </div>
  );
}

PageVision.getLayout = function getLayout(page: ReactNode) {
  return <VisionLayout>{page}</VisionLayout>;
};
