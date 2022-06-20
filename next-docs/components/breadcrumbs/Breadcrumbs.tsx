import { Breadcrumb } from '@heathmont/moon-core-tw';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumbs = () => {
  const { pathname } = useRouter();
  const [_, ...pages] = pathname === '/' ? [] : pathname.split('/');
  const breadcrumbsPath =
    pages.length > 0 &&
    (pages.map((page) => (
      <Link href={page}>
        <a>{page && page[0].toUpperCase() + page.slice(1)}</a>
      </Link>
    )) as any);
  breadcrumbsPath.unshift(
    <Link href="/">
      <a>Moon.io</a>
    </Link>
  );
  if (pathname === '/') {
    return null;
  }
  return <Breadcrumb breadcrumbs={breadcrumbsPath} />;
};

export default Breadcrumbs;
