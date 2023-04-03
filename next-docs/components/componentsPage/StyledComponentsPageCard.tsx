import Link from 'next/link';
import getStyledComponent from '../getStyledComponent';

const ComponentsPageCard = ({ title }: { title: string }) => {
  const { href } = getStyledComponent(title);
  return (
    <Link href={href as string}>
      <div className="flex flex-col gap-4 items-center border border-beerus rounded-moon-s-lg p-2">
        <h3 className="text-moon-20 font-medium">{title}</h3>
      </div>
    </Link>
  );
};

export default ComponentsPageCard;
