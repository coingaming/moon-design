import Image from 'next/image';
import type CardFrontProps from './types/CardFrontProps';

const CardFront: React.FC<CardFrontProps> = ({
  headerImage,
  altHeaderImage,
  subtext,
  innerCardText,
  name,
  company,
  userImage,
}) => {
  return (
    <div className="flex flex-col items-center bg-goku rounded-moon-s-lg gap-14 p-2">
      <div className="flex flex-col gap-14 max-w-lg items-end">
        <Image src={headerImage} alt={altHeaderImage} />
        <p className="text-moon-16 max-w-md text-right text-trunks">
          {subtext}
        </p>
      </div>
      <div className="flex flex-col rounded-moon-s-md py-6 px-8 gap-6 bg-gohan">
        <p className="text-moon-32">{innerCardText}</p>
        <div className="flex items-center gap-2">
          <Image src={userImage} alt="Testimonial" />
          <div className="flex flex-col">
            <p className="text-moon-18">{name}</p>
            <p className="text-moon-16 text-trunks">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
