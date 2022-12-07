import { Accordion } from '@heathmont/moon-core-tw';
import Link from './Link';
import type ItemType from './ItemType';

type Props = {
  item: ItemType;
  pathname: string;
  onClick?: () => void;
};

const RecursiveNavItem: React.FC<Props> = ({ item, pathname, onClick }) => {
  const { name, href, children } = item;
  const gettingStartedPathname =
    pathname === '/gettingStartedDevs' || pathname === '/gettingStartedSc'
      ? '/gettingStarted'
      : pathname;
  const isCurrent = href === gettingStartedPathname;
  if (children) {
    return (
      <Accordion title={name} isContentInside={false}>
        <div className="flex flex-col items-start gap-2 ps-8">
          {children.map((subItem: ItemType) => (
            <RecursiveNavItem
              key={subItem.name}
              item={subItem}
              pathname={pathname}
              onClick={onClick}
            />
          ))}
        </div>
      </Accordion>
    );
  }
  return (
    <Link key={name} href={href} isActive={isCurrent} onClick={onClick}>
      {name}
    </Link>
  );
};

export default RecursiveNavItem;
