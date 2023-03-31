import { Accordion, mergeClassnames } from '@heathmont/moon-core-tw';
import { ControlsChevronRight } from '@heathmont/moon-icons-tw';
import Link from './Link';
import type ItemType from './ItemType';

type Props = {
  item: ItemType;
  pathname: string;
  onClick?: () => void;
};

const RecursiveNavItem: React.FC<Props> = ({ item, pathname, onClick }) => {
  const { name, href, children } = item;
  if (children) {
    return (
      <Accordion>
        <Accordion.Item value="item">
          <Accordion.Header className="moon-open:[&_svg]:rotate-90">
            <Accordion.Button>
              <span>{name}</span>
              <ControlsChevronRight
                className={mergeClassnames(
                  'text-trunks text-moon-16 transition-transform transition-200'
                )}
              />
            </Accordion.Button>
          </Accordion.Header>
          <Accordion.ContentOutside>
            <div className="flex w-full flex-col items-start gap-2 ps-8">
              {children.map((subItem: ItemType) => (
                <RecursiveNavItem
                  key={subItem.name}
                  item={subItem}
                  pathname={pathname}
                  onClick={onClick}
                />
              ))}
            </div>
          </Accordion.ContentOutside>
        </Accordion.Item>
      </Accordion>
    );
  }
  return (
    <Link key={name} href={href} onClick={onClick}>
      {name}
    </Link>
  );
};

export default RecursiveNavItem;
