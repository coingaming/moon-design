type Props = {
  title?: string;
  name?: string;
  children: React.ReactNode;
};

const PageSection: React.FC<Props> = ({ title, name, children }) => (
  <section className="flex flex-col gap-6" id={name}>
    {title && <h2 className="text-moon-24 font-medium">{title}</h2>}
    <div className="flex flex-col gap-4">{children}</div>
  </section>
);

export default PageSection;
