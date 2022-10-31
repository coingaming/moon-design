import Image, { StaticImageData } from 'next/image';
import classNames from '../utils/classNames';

type Props = {
  title?: string;
  id?: string;
  image?: StaticImageData;
  children: React.ReactNode;
};

const PageSection: React.FC<Props> = ({ title, id, image, children }) => (
  <section className="flex flex-col lg:flex-row gap-6" id={id}>
    <div
      className={classNames(
        'flex flex-col w-full gap-6',
        image && image ? 'basis-1/2' : ''
      )}
    >
      {title && <h2 className="text-moon-24 font-medium">{title}</h2>}
      <div className="w-full flex flex-col gap-2 text-moon-16">{children}</div>
    </div>
    {image && (
      <div className="flex lg:basis-1/2 items-center justify-center h-80 rounded-moon-s-md overflow-hidden">
        <Image src={image} alt={title} />
      </div>
    )}
  </section>
);

export default PageSection;
