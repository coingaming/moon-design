import React, { ReactNode } from 'react';
import Vip from '../sportsbet/vip';
const Layout = () => {
  return (
    <div className="flex w-full h-full overflow-hidden">
      <div className="hidden bg-goku w-[232px] sm:w-[15%] sticky xl:block rounded-br-3xl ">
        <div className="w-[100vw] h-full"></div>
      </div>
      <div className="max-w-full">
        <Vip />
      </div>
    </div>
  );
};

Layout.getLayout = function getLayout(page: ReactNode) {
  return (
    <div className="w-full min-h-screen theme-sb-dark bg-gohan text-white">
      {page}
    </div>
  );
};
export default Layout;
