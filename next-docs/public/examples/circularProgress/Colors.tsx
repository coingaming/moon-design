import { CircularProgress } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <CircularProgress value={75} className="[&_.background]:stroke-cell" />
    <CircularProgress
      value={75}
      className="[&_.background]:stroke-whis [&_.progress]:stroke-dodoria"
    />
    <CircularProgress value={75} className="[&_.progress]:stroke-roshi" />
  </>
);

export default Example;
