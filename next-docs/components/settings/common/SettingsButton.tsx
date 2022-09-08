import { MediaTuner } from '@heathmont/moon-icons-tw';

type Props = React.HTMLProps<HTMLButtonElement> & {
  onClick: () => void;
};

const SettingsButton: React.FC<Props> = ({ onClick }) => (
  <button
    onClick={onClick}
    type="button"
    aria-pressed="false"
    className="flex items-center justify-center w-10 h-10 text-bulma bg-goku fixed bottom-4 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none z-50 shadow-md ltr:right-4 rtl:left-4"
  >
    <MediaTuner className="text-moon-24" />
  </button>
);

export default SettingsButton;
