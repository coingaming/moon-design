type Props = {
  title?: string;
  description?: string;
};

const SectionTitle: React.FC<Props> = ({ title, description }) => (
  <div className="flex flex-col gap-6">
    {title && <h2 className="text-moon-32 font-medium">{title}</h2>}
    {description && <p className="text-moon-16">{description}</p>}
  </div>
);

export default SectionTitle;
