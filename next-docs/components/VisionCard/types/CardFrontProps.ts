import { StaticImageData } from 'next/image';

type CardFrontProps = {
  headerImage: string | StaticImageData;
  altHeaderImage: string;
  subtext: string;
  innerCardText: string;
  name: string;
  company: string;
  userImage: string | StaticImageData;
};

export default CardFrontProps;
