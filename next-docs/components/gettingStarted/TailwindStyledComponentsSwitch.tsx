import Link from 'next/link';
import classNames from '../../utils/classNames';

const Button: React.FC<{ isActive: boolean; onClick: () => void }> = ({
  children,
  isActive,
  ...rest
}) => (
  <a
    className={classNames(
      'group',
      isActive ? 'text-bulma bg-gohan' : 'text-trunks',
      'group cursor-pointer transition-colors flex-inline rounded-md p-1.5 lg:ps-2.5 lg:pe-3.5 flex items-center text-sm font-medium shadow-sm'
    )}
    {...rest}
  >
    {children}
  </a>
);

type Props = {
  isTwActive: boolean;
  setTwActive: () => void;
  setScActive: () => void;
};

const TailwindStyledComponentsSwitch = ({
  isTwActive,
  setTwActive,
  setScActive,
}: Props) => (
  <div className="flex flex-row gap-2">
    <div className="p-0.5 rounded-lg flex bg-beerus">
      <Link href="/gettingStartedDevs">
        <Button isActive={isTwActive} onClick={setTwActive}>
          I use Tailwind
        </Button>
      </Link>
      <Link href="/gettingStartedSc">
        <Button isActive={!isTwActive} onClick={setScActive}>
          I use Styled Components
        </Button>
      </Link>
    </div>
  </div>
);

export default TailwindStyledComponentsSwitch;
