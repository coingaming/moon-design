import React, {ReactElement} from "react";

const Layout = ({ sidebar, children }: { sidebar?: ReactElement, children: ReactElement}) =>{
  return (
    <div className="w-full min-h-screen theme-bitcasino-dark bg-goku text-white">
      <div className="flex w-full h-full overflow-hidden">
        <div className="hidden bg-gohan w-[232px] min-w-[232px] sticky sm:block rounded-br-3xl relative z-20">
          {
            !sidebar
            ? (<div className="h-full w-full flex justify-center pt-16 mt-16">Sidebar content</div>)
            : (<div className="w-[232px] min-w-[232px] h-full fixed top-0 left-0">{sidebar}</div>)
          }
        </div>
        <div className="w-full z-10">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
