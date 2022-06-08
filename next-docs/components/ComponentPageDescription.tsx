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
  <>
    <h1 className="text-moon-32 font-medium">{title}</h1>
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 justify-between items-start">
      <div className="flex flex-col gap-2 max-w-screen-sm text-moon-16">
        {children}
      </div>
      {image && (
        <div className="w-full max-w-md rounded-moon-s-sm overflow-hidden">
          <Image src={image} alt={title} />
        </div>
      )}
    </div>
  </>
);

export default ComponentPageDescription;
