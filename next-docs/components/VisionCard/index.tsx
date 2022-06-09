import CardBack from './CardBack';
import CardFront from './CardFront';
import type CardBackProps from './types/CardBackProps';
import type CardFrontProps from './types/CardFrontProps';

const VisionCard: React.FC<CardFrontProps & CardBackProps> = (props) => (
  <div className="flex flex-col 2xl:flex-row items-center gap-8 2xl:gap-18 3xl:gap-36">
    <CardFront {...props} />
    <CardBack {...props} />
  </div>
);

export default VisionCard;
