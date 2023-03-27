import { Breadcrumb } from '@heathmont/moon-core-tw';
import { GenericHome, ControlsChevronRight } from '@heathmont/moon-icons-tw';
import Link from 'next/link';

const breadcrumbs = [
  <Link href="">
    <GenericHome className="text-moon-24" />
  </Link>,
  <Link href="">Page 1</Link>,
  <Link href="">Page 2</Link>,
  <Link href="">Page 3</Link>,
  <Link href="">Page 4</Link>,
  <span>Current page</span>,
];

const Example = () => (
  <Breadcrumb
    breadcrumbs={breadcrumbs}
    divider={<ControlsChevronRight className="text-moon-20" />}
  />
);

export default Example;
