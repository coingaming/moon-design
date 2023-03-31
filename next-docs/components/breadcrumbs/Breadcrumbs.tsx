import { Breadcrumb } from '@heathmont/moon-core-tw';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumbs = () => {
  const { pathname } = useRouter();
  const [_, ...pages] = pathname === '/' ? [] : pathname.split('/');
  if (pathname === '/') {
    return null;
  }
  const breadcrumbsPath = [<Link href="/">Home</Link>].concat(
    pages.map((page, index) => {
      let pageLink = page;
      switch (page) {
        case 'components':
          pageLink = '/components';
          break;
        case 'styledComponents':
          pageLink = '/styledComponents';
          break;
        default:
          break;
      }
      return (
        <Link href={pageLink} key={index}>
          {page && page[0].toUpperCase() + page.slice(1)}
        </Link>
      );
    })
  );
  return (
    <div className="relative z-10 hidden lg:block pb-12">
      <Breadcrumb breadcrumbs={breadcrumbsPath} />
    </div>
  );
};

export default Breadcrumbs;
