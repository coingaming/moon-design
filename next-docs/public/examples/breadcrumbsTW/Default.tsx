import { Breadcrumb } from '@heathmont/moon-core-tw';
import Link from 'next/link';

const Example = () => {
  const breadcrumbs = [
    <Link href="/">
      <a>Moon.io</a>
    </Link>,
    <Link href="/breadcrumb_item_1">
      <a>Breadcrumb item 1</a>
    </Link>,
    <Link href="/breadcrumb_item_2">
      <a>Breadcrumb item 2</a>
    </Link>,
    <Link href="/breadcrumb_item_3">
      <span>Breadcrumb item 3</span>
    </Link>,
  ];

  return (
    <>
      <Breadcrumb breadcrumbs={breadcrumbs} />
    </>
  );
};

export default Example;
