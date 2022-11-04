import { Snackbar, Button } from '@heathmont/moon-core-tw';
import { GenericCheckAlternative } from '@heathmont/moon-icons-tw';

const Example = () => (
  <div>
    <Button onClick={Snackbar.onOpenSnackbar}>Open Top Center Snackbar</Button>
    <Snackbar position="top-center" type="success" autoClose={10000}>
      <Snackbar.Message>Welcome to Sportsbet</Snackbar.Message>
      <Snackbar.Message>Welcome to Sportsbet</Snackbar.Message>
      <Snackbar.Close />
    </Snackbar>
  </div>
);

export default Example;
