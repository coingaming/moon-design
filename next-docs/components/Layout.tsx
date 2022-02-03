import React, {
  JSXElementConstructor,
  ReactElement,
  ReactPortal,
  useState,
} from 'react';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';
import Footer from './Footer';
import Sidebar from './sidebar/Sidebar';
import SidebarTransition from './sidebar/SidebarTransition';
import BrandThemeSelector from './themes/BrandThemeSelector';
import DarkLightModeSwitcher from './themes/DarkLightModeSwitch';
import { useDocsTheme } from './themes/DocsThemeProvider';
import RTLModeSwitch from './themes/RTLModeSwitch';

const brandMap = {
  moonDesign: 'moon',
  sportsbet: 'sportsbet',
  bitcasino: 'bitcasino',
  betadda: 'betadda',
  // hub88: 'hub88', <-- previously was used for the old design
};

export type Brand = keyof typeof brandMap | null;
interface GetClassNameProps {
  brand: Brand | null;
  colorMode: string | null;
}

const singleThemedBrands: string[] = [];

const getClassName = ({ brand, colorMode }: GetClassNameProps) => {
  const brandName = brand ? brandMap[brand] : '';
  const singleThemed = singleThemedBrands.includes(brandName);
  if (brandName) {
    return singleThemed
      ? `theme-${brandName}`
      : `theme-${brandName}-${colorMode}`;
  }
  return 'theme-moon-dark';
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toggleColorScheme, getColorMode, setBrand, getBrand, themeKeys } =
    useDocsTheme();
  const openSidebar = () => setSidebarOpen(true);
  const className = getClassName({
    brand: getBrand() as Brand,
    colorMode: getColorMode(),
  });

  const [isRtl, toggleDir] = useState(false);

  const toggleDirection = () => {
    const htmlTag = document && document?.getElementsByTagName('html')[0];
    toggleDir(!isRtl);
    const dirAttr = htmlTag.getAttribute('dir');

    if (!dirAttr) {
      htmlTag.setAttribute('dir', 'rtl');
    } else {
      htmlTag.removeAttribute('dir');
    }
  };

  const recursiveMap = (
    children: React.ReactNode,
    fn: (
      child:
        | {}
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactPortal
    ) => void
  ): React.ReactNode => {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child) || typeof child.type == 'string') {
        return child;
      }

      if (child.props.children) {
        child = React.cloneElement(child, {
          children: recursiveMap(child.props.children, fn),
        });
      }

      return fn(child);
    });
  };

  const cloneElements = (
    child:
      | {}
      | ReactElement<any, string | JSXElementConstructor<any>>
      | ReactPortal
  ) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { isRtl });
    }
    return child;
  };

  const childrenWithProps = recursiveMap(children, cloneElements);

  return (
    <div
      className={`${className} support-colors bg-background flex rounded-tl-3xl rounded-tr-3xl`}
    >
      {/* Dynamic sidebar with transition for mobile */}
      <SidebarTransition isOpen={sidebarOpen} setIsOpen={setSidebarOpen}>
        <Sidebar />
      </SidebarTransition>

      {/* Static sidebar for desktop, hidden for mobile */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="w-64 flex flex-col">
          <Sidebar />
        </div>
      </div>

      <div className="min-h-screen flex-1 lg:mx-32 lg:mt-8 w-0 flex flex-col lg:px-8 xl:px-0">
        {/* Opens sidebar on mobile */}
        <div className="lg:hidden flex flex-row align-center">
          <button
            type="button"
            className="p-4 text-gray-500 focus:outline-none"
            onClick={openSidebar}
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="h-6 w-6"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 9.5H24.5M7.5 21.5H24.5M7.5 15.5H24.5"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <Breadcrumbs />
        </div>
        <div className="hidden lg:block">
          <Breadcrumbs />
        </div>

        {/* TODO overflow-y-auto */}
        <main className="flex flex-col flex-1 relative overflow-y-auto focus:outline-none">
          <BrandThemeSelector
            themeKeys={themeKeys}
            setBrand={setBrand}
            isRtlEnabled={isRtl}
            darkLight={
              <DarkLightModeSwitcher
                toggle={toggleColorScheme}
                isEnabled={getColorMode() === 'dark'}
                isRtlEnabled={isRtl}
              />
            }
            rtlSwitch={
              <RTLModeSwitch toggle={toggleDirection} isEnabled={isRtl} />
            }
          />

          <div className="py-6 px-4 md:px-16 lg:px-0">{childrenWithProps}</div>

          <div className="mt-auto py-8 px-4 lg:pt-24">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
