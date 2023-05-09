import { Button } from '@heathmont/moon-core-tw';
import Image from 'next/image';
import image404 from '../public/404.png';

const Page404 = () => (
  <div className="flex flex-col items-center min-h-full justify-center">
    <Image src={image404} alt="Lost in space" width={1280} />
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-moon-48 font-medium text-center">Lost in space</h1>
      <p className="text-moon-24 text-center">
        Huston, we have a problem. Moon not found.
      </p>
      <Button
        as="a"
        href="/"
        className="text-piccolo bg-transparent ring-1 ring-piccolo"
      >
        Go back to home
      </Button>
    </div>
  </div>
);

export default Page404;
