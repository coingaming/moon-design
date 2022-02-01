import Link from 'next/link';
import { useRouter } from 'next/router';

// const pages = [
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Project Nero', href: '#', current: true },
// ];

export default function Breadcrumbs() {
  const { pathname } = useRouter();

  const [_, ...pages] = pathname === '/' ? [] : pathname.split('/');
  if (pathname === '/') {
    return null;
  }
  return (
    <nav className="breadcrumbs flex" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center space-x-4">
        <li>
          <div className="flex items-center">
            <Link href="/">
              <a className="text-sm leading-4 text-gray-500 hover:text-gray-700">
                Moon.io
              </a>
            </Link>
          </div>
        </li>
        {pages.length > 0 &&
          pages.map((page, index) => (
            <li key={page + index} className="ms-3">
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-500"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 10L19 16L13 22"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <a
                  href="#"
                  className="ms-3 text-sm leading-4 text-gray-500 hover:text-gray-700"
                  // aria-current={page.current ? 'page' : undefined}
                >
                  {page && page[0].toUpperCase() + page.slice(1)}
                </a>
              </div>
            </li>
          ))}
      </ol>
    </nav>
  );
}
