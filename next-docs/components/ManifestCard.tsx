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
      'moon-light flex flex-col gap-4 py-6 px-8 rounded-moon-s-lg',
      isHighlighted ? 'bg-frieza text-goten' : 'bg-gohan text-bulma'
    )}
  >
    <h3 className="text-moon-24 font-medium">{title}</h3>
    {!!contentItems.length && (
      <ul className="list-disc ml-6">
        {contentItems.map((item: string) => (
          <li className="text-moon-16">{item}</li>
        ))}
      </ul>
    )}
  </div>
);

export default ManifestCard;
