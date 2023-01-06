import React from 'react';
import { Alert } from '@heathmont/moon-core-tw';
import { OtherFrame } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <Alert>
      <Alert.Message>
        <OtherFrame className="text-moon-24" />
        Alert with icon
      </Alert.Message>
    </Alert>
    <Alert>
      <Alert.Title>
        <OtherFrame className="text-moon-24" />
        Alert with title and icon
      </Alert.Title>
      <Alert.Message>Alert message</Alert.Message>
    </Alert>
  </>
);

export default Example;
