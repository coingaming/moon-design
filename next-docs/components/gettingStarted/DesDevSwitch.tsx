import Link from 'next/link';
import classNames from '../../utils/classNames';

const Button: React.FC<{ isActive: boolean; onClick: () => void }> = ({
  children,
  isActive,
  ...rest
}) => (
  <button
    className={classNames(
      'group',
      isActive ? 'text-gray-900 bg-white' : 'text-gray-600 ',
      'group transition-colors flex-inline rounded-md p-1.5 lg:ps-2.5 lg:pe-3.5 flex items-center text-sm font-medium shadow-sm'
    )}
    {...rest}
  >
    {children}
  </button>
);

type Props = {
  isDesActive: boolean;
  setDesActive: () => void;
  setDevActive: () => void;
};

const DesDevSwitch = ({ isDesActive, setDesActive, setDevActive }: Props) => (
  <div className="flex flex-row gap-2">
    <div className="p-0.5 rounded-lg flex bg-gray-300">
      <Link href="/gettingStarted">
        <a>
          <Button isActive={isDesActive} onClick={setDesActive}>
            I'm a designer
          </Button>
        </a>
      </Link>
      <Link href="/gettingStartedDevs">
        <a>
          <Button isActive={!isDesActive} onClick={setDevActive}>
            I'm a developer
          </Button>
        </a>
      </Link>
    </div>
  </div>
);

export default DesDevSwitch;
