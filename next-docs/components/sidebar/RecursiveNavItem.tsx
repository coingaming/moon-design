import { Disclosure } from '@headlessui/react';
import { Accordion } from '@heathmont/moon-core-tw';
import Arrow from './Arrow';
import Link from './Link';
import recursiveIsCurrent from './recursiveIsCurrent';
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
    // <Disclosure
    //   as="div"
    //   key={name}
    //   className="space-y-1"
    //   defaultOpen={recursiveIsCurrent(item, pathname)}
    // >
    //   {({ open }) => (
    //     <>
    //       <Disclosure.Button className="text-black hover:text-active hover:bg-active-80 text-lg px-3 py-2 leading-7 group w-full flex justify-between items-center pr-2 py-2 text-left rounded-md focus:outline-none transition-colors ease-in-out duration-150">
    //         {name}
    //         <Arrow isOpen={open} />
    //       </Disclosure.Button>
    //       <Disclosure.Panel className="space-y-1">
    //         {children.map((subItem: ItemType) => (
    //           <div key={subItem.name} className="ps-7">
    //             <RecursiveNavItem item={subItem} pathname={pathname} />
    //           </div>
    //         ))}
    //       </Disclosure.Panel>
    //     </>
    //   )}
    // </Disclosure>
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
