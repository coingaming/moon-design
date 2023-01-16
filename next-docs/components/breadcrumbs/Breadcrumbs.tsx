import { Breadcrumb } from '@heathmont/moon-core-tw';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumbs = () => {
  const { pathname } = useRouter();
  const [_, ...pages] = pathname === '/' ? [] : pathname.split('/');
  const breadcrumbsPath = [
    <Link href="/">
      <a>Home</a>
    </Link>,
    <>
      {pages.length > 0
        ? pages.map((page, index) => (
            <Link href={page} key={index}>
              <a>{page && page[0].toUpperCase() + page.slice(1)}</a>
            </Link>
          ))
        : null}
    </>,
  ];
  if (pathname === '/') {
    return null;
  }
  return (
    <div className="relative z-10 hidden lg:block pb-12">
      <Breadcrumb breadcrumbs={breadcrumbsPath as any} />
    </div>
  );
};

export default Breadcrumbs;
