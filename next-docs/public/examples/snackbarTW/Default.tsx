import { Snackbar } from '@heathmont/moon-core-tw';
import { GenericCheckAlternative } from '@heathmont/moon-icons-tw';

const Example = () => (
  <Snackbar position="top-center" type='success' autoClose={10000}>
    <Snackbar.Message>Welcome to Sportsbet</Snackbar.Message>
      <Snackbar.Message>Welcome to Sportsbet</Snackbar.Message>
  </Snackbar>
);

export default Example;
