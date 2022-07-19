import React, { ReactNode } from "react";
import Vip from "../bitcasino/vip";

const Layout = () =>{
  return (
    <div className="flex w-full h-full min-w-[48px] overflow-hidden">
      <div className="hidden bg-gohan w-[232px] sticky md:block rounded-br-3xl ">
        <div className=" w-[100vw] h-[100vh]"></div>
      </div>
      <div className="w-full">
        <Vip />
      </div>
    </div>
  );
}

Layout.getLayout = function getLayout(page: ReactNode) {
  return (
    <div className="w-full min-h-screen theme-bitcasino-dark bg-goku text-white">
      {page}
    </div>
  );
};
export default Layout;