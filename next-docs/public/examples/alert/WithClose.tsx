import React from 'react';
import { Alert } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <Alert>
      Alert with close
      <Alert.Close />
    </Alert>
    <Alert>
      <Alert.Title>Alert with title and close</Alert.Title>
      <Alert.Message>Alert message</Alert.Message>
      <Alert.Close />
    </Alert>
  </>
);

export default Example;
