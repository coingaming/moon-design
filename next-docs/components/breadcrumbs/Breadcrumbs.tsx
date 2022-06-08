import { ArrowsRight } from '@heathmont/moon-icons-tw';
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
      <ol className="flex flex-wrap lg:pb-12 gap-2 items-center text-moon-12">
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
              <ArrowsRight className="text-moon-16 text-trunks" />
              <a href={page}>{page && page[0].toUpperCase() + page.slice(1)}</a>
            </li>
          ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
