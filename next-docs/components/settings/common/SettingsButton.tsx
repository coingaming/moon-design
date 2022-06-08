import { MediaTuner } from '@heathmont/moon-icons-tw';
import classNames from '../../../utils/classNames';

type Props = React.HTMLProps<HTMLButtonElement> & {
  onClick: () => void;
  isRtlEnabled: boolean;
};

const SettingsButton: React.FC<Props> = ({ onClick, isRtlEnabled }) => (
  <button
    onClick={onClick}
    type="button"
    aria-pressed="false"
    className={classNames(
      'text-black bg-white hover:bg-gray-200 fixed bottom-4 inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none z-50 shadow-md',
      isRtlEnabled ? 'left-4' : 'right-4 '
    )}
  >
    <MediaTuner className="text-moon-32" />
  </button>
);

export default SettingsButton;
