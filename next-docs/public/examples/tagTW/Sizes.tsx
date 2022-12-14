import { Tag } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <Tag size="2xs">Twoxsmall (2xs)</Tag>
    <Tag>Xsmall (xs)</Tag>
    <Tag size="2xs" isUppercase={false}>
      Twoxsmall (2xs)
    </Tag>
    <Tag isUppercase={false}>Xsmall (xs)</Tag>
  </>
);

export default Example;
