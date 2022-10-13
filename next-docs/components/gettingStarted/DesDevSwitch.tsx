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
  isDesActive: boolean;
  setDesActive: () => void;
  setDevActive: () => void;
};

const DesDevSwitch = ({ isDesActive, setDesActive, setDevActive }: Props) => (
  <div className="flex flex-row gap-2">
    <div className="p-0.5 rounded-lg flex bg-beerus">
      <Link href="/gettingStarted">
        <Button isActive={isDesActive} onClick={setDesActive}>
          I'm a designer
        </Button>
      </Link>
      <Link href="/gettingStartedDevs">
        <Button isActive={!isDesActive} onClick={setDevActive}>
          I'm a developer
        </Button>
      </Link>
    </div>
  </div>
);

export default DesDevSwitch;
