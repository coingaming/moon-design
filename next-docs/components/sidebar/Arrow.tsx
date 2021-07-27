import classNames from "../../utils/classNames";

const Arrow: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    className={classNames(
      isOpen ? 'text-gray-400 rotate-90' : 'text-gray-300',
      'flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
    )}
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
  </svg>
);

export default Arrow;