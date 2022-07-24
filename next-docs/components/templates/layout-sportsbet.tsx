import React, {ReactElement} from "react";

const Layout = ({ sidebar, children }: { sidebar?: ReactElement, children: ReactElement}) =>{
  return (
    <div className="w-full min-h-screen theme-sb-dark bg-goku text-white">
      <div className="flex flex-nowrap w-full h-full overflow-hidden">
        <div className="hidden bg-goku w-[232px] min-w-[232px] sm:block rounded-br-3xl relative z-20">
          {
            !sidebar
            ? (<div className="h-full w-full flex justify-center pt-16 mt-16">Sidebar content</div>)
            : (<div className="w-[232px] min-w-[232px] h-full fixed top-0 left-0">{sidebar}</div>)
          }
        </div>
        <div className="grow p-4 z-10 overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
