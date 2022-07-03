import { MediaTuner } from '@heathmont/moon-icons-tw';

type Props = React.HTMLProps<HTMLButtonElement> & {
  onClick: () => void;
};

const SettingsButton: React.FC<Props> = ({ onClick }) => (
  <button
    onClick={onClick}
    type="button"
    aria-pressed="false"
    className="text-black bg-white hover:bg-gray-200 fixed bottom-4 inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none z-50 shadow-md ltr:right-4 rtl:left-4"
  >
    <MediaTuner className="text-moon-32" />
  </button>
);

export default SettingsButton;
