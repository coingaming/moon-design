import Image, { StaticImageData } from 'next/image';

type Props = {
  title: string;
  image?: StaticImageData;
  children: React.ReactNode;
};

const ComponentPageDescription: React.FC<Props> = ({
  title,
  image,
  children,
}) => (
  <div className="flex flex-col lg:flex-row gap-4">
    <div className="flex flex-col gap-12 lg:basis-1/2">
      <h1 className="text-moon-32 font-medium">{title}</h1>
      <div className="flex flex-col gap-2 text-moon-16">{children}</div>
    </div>
    {image && (
      <div className="flex lg:basis-1/2 items-center justify-center h-80 rounded-moon-s-md overflow-hidden">
        <Image src={image} alt={title} />
      </div>
    )}
  </div>
);

export default ComponentPageDescription;
