import { Banner, Button } from '@heathmont/moon-core-tw';

const Example = () => {
  const link = (
    <Button variant="ghost">Resend verification link to email ›</Button>
  );
  return (
    <Banner
      description="Your email is not verified. Verify to enable withdrawals."
      link={link}
      isMultiline={false}
    />
  );
};

export default Example;
