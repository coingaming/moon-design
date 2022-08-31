const FacingReel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-row items-start gap-4 md:gap-16 overflow-x-auto reel">
    {children}
  </div>
);

export default FacingReel;
