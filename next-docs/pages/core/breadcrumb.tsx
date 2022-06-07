import { Breadcrumb } from '@heathmont/moon-core-tw';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Preview from '../../components/codePreview/Preview';
import useExamples from '../../utils/useExamples';

const Example = () => {
  //   const examples = useExamples('chipTW');

  const { pathname } = useRouter();
  const [_, ...pages] = pathname === '/' ? [] : pathname.split('/');
  if (pathname === '/') {
    return null;
  }
  const breadcrumbs = pages.map((page) => {
    return (
      <Link href={page}>
        <a>{page && page[0].toUpperCase() + page.slice(1)}</a>
      </Link>
    );
  });

  console.log('breadcrumbs', breadcrumbs);

  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />
    </>
  );
};

export default Example;
