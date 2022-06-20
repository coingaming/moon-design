import { FC } from 'react';
import { ElixirThemeType } from './store';

interface BrandThemeButtonProps {
  key: string | ElixirThemeType;
  onClick: () => void;
}

export const BrandThemeButton: FC<BrandThemeButtonProps> = ({
  key,
  onClick,
  children,
}) => {
  return (
    <button
      key={key}
      type="button"
      onClick={onClick}
      className="ms-4 p-2 rounded-full text-black bg-white hover:bg-gray-200 inline-flex items-center justify-center shadow-md"
    >
      {children}
    </button>
  );
};
