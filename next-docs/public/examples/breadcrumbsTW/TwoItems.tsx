import { Breadcrumb } from '@heathmont/moon-core-tw';
import Link from 'next/link';

const breadcrumbs = [
  <Link href="">
    <a>Home</a>
  </Link>,
  <span>Current page</span>,
];

const Example = () => <Breadcrumb breadcrumbs={breadcrumbs} />;

export default Example;
