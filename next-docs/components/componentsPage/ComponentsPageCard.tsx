import Image from 'next/image';
import Link from 'next/link';
import getComponent from '../getComponent';

const ComponentsPageCard = ({ title }: { title: string }) => {
  const { component, image } = getComponent(title);
  return (
    <Link href={component ? component?.href : ''}>
      <div className="flex flex-col gap-4 border border-beerus rounded-moon-s-lg p-2 pb-6">
        <Image src={image} alt={title} width={408} height={224} />
        <div className="flex flex-col gap-2">
          <h3 className="text-moon-20 font-medium">{title}</h3>
          <p className="h-12 text-moon-16 text-ellipsis overflow-hidden">
            {component?.text}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ComponentsPageCard;
