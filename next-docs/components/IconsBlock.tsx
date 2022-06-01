const IconsBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-row flex-wrap gap-4 bg-goku p-4 text-moon-14 rounded-moon-s-sm">
    {children}
  </div>
);

export default IconsBlock;
