import { Banner, Button } from '@heathmont/moon-core';

const Example = () => {
  const buttons = [
    <Button variant="secondary">Discard</Button>,
    <Button>Confirm</Button>,
  ];
  return (
    <Banner
      title="Title here"
      description="Lorem ipsum dolor..."
      buttons={buttons}
      isMobile
    />
  );
};

export default Example;
