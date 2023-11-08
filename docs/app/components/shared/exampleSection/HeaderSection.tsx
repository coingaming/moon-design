import { GenericLink } from '@heathmont/moon-icons-tw';

type Props = {
  title?: string;
  description?: string | JSX.Element;
};
const HeaderSection = ({ title, description }: Props) => (
  <>
    <h2 id={title} className="text-moon-20 font-medium ">
      <a
        href={`#${title}`}
        className="flex items-center gap-3 [&:hover_svg]:opacity-100 cursor-pointer"
      >
        {title}
        <GenericLink className="text-piccolo text-moon-16 opacity-0 transition-opacity" />
      </a>
    </h2>
    {description && (
      <div className="text-moon-16 text-bulma">{description}</div>
    )}
  </>
);

export default HeaderSection;
