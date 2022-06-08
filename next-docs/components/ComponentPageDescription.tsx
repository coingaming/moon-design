type Props = {
  title: string;
  children: React.ReactNode;
};

const ComponentPageDescription: React.FC<Props> = ({ title, children }) => (
  <>
    <h1 className="text-moon-32 font-medium">{title}</h1>
    <div className="flex flex-col gap-2 max-w-screen-sm text-moon-16">
      {children}
    </div>
  </>
);

export default ComponentPageDescription;
