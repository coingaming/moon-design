import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumbs = () => {
  const { pathname } = useRouter();
  const [_, ...pages] = pathname === '/' ? [] : pathname.split('/');
  if (pathname === '/') {
    return null;
  }
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-2 items-center text-moon-12">
        <li className="flex items-center gap-2 text-trunks transition-colors duration-200 hover:text-bulma">
          <Link href="/">
            <a>Moon.io</a>
          </Link>
        </li>
        {pages.length > 0 &&
          pages.map((page, index) => (
            <li
              key={page + index}
              className="flex items-center gap-2 text-trunks transition-colors duration-200 hover:text-bulma"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 16.004L25.996 16m0 0l-5.383-5.386M25.996 16l-5.383 5.385"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <a href={page}>{page && page[0].toUpperCase() + page.slice(1)}</a>
            </li>
          ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
