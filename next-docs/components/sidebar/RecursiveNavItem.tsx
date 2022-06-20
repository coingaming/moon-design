import { Accordion } from '@heathmont/moon-core-tw';
import Link from './Link';
import type ItemType from './ItemType';

type Props = {
  item: ItemType;
  pathname: string;
};

const RecursiveNavItem: React.FC<Props> = ({ item, pathname }) => {
  const { name, href, children } = item;
  const isCurrent = href === pathname;
  if (!children) {
    return (
      <Link key={name} href={href} isActive={isCurrent}>
        {name}
      </Link>
    );
  }
  return (
    <Accordion title={name} isContentInside={false}>
      <div className="flex flex-col gap-2 ps-8">
        {children.map((subItem: ItemType) => (
          <RecursiveNavItem
            key={subItem.name}
            item={subItem}
            pathname={pathname}
          />
        ))}
      </div>
    </Accordion>
  );
};

export default RecursiveNavItem;
