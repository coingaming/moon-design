import type CardBackProps from './types/CardBackProps';

const CardBack: React.FC<CardBackProps> = ({
  heading,
  subHeading,
  supportingTextItems,
}) => {
  return (
    <div className="flex flex-col gap-8 max-w-sm">
      <h3 className="text-moon-48 font-medium">{heading}</h3>
      <p className="text-moon-20">{subHeading}</p>
      <ul className="flex flex-col gap-4 text-moon-18 text-trunks list-disc ml-6">
        {supportingTextItems.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardBack;
