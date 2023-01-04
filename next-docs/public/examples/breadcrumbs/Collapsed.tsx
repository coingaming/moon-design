import { Breadcrumb } from '@heathmont/moon-core-tw';
import Link from 'next/link';

const breadcrumbs = [
  <Link href="">
    <a>Home</a>
  </Link>,
  <Link href="">
    <a>Page 1</a>
  </Link>,
  <Link href="">
    <a>Page 2</a>
  </Link>,
  <Link href="">
    <a>Page 3</a>
  </Link>,
  <Link href="">
    <a>Page 4</a>
  </Link>,
  <span>Current page</span>,
];

const Example = () => <Breadcrumb breadcrumbs={breadcrumbs} />;

export default Example;
