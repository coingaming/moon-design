import { MediaTuner } from '@heathmont/moon-icons';

const SettingsButton: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  onClick,
}) => (
  <button
    onClick={onClick}
    type="button"
    aria-pressed="false"
    className="right-4 text-black bg-white hover:bg-gray-200 fixed bottom-4 inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none z-50 shadow-md"
  >
    <MediaTuner fontSize="2rem" />
  </button>
);

export default SettingsButton;
