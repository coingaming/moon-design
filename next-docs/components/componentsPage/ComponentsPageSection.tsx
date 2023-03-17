type Props = {
  title: string;
  children?: React.ReactNode;
};

const ComponentsPageSection: React.FC<Props> = ({ title, children }) => (
  <section className="flex flex-col gap-6">
    <h2 className="text-moon-24 font-medium">{title}</h2>
    <div className="grid gap-6 grid-cols-1 md:grid-cols-3">{children}</div>
  </section>
);

export default ComponentsPageSection;
