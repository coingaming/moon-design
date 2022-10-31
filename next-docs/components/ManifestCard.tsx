import classNames from '../utils/classNames';

type Props = {
  title: string;
  contentItems: string[];
  isHighlighted?: boolean;
};

const ManifestCard: React.FC<Props> = ({
  title,
  contentItems,
  isHighlighted,
}) => (
  <div
    className={classNames(
      'theme-moon-light flex flex-col gap-4 py-6 px-8 rounded-moon-s-lg',
      isHighlighted ? 'bg-frieza text-goten' : 'bg-goku text-bulma'
    )}
  >
    <h3 className="text-moon-24 font-medium">{title}</h3>
    {!!contentItems.length && (
      <ul className="list-disc ms-6">
        {contentItems.map((item: string) => (
          <li className="text-moon-16">{item}</li>
        ))}
      </ul>
    )}
  </div>
);

export default ManifestCard;
