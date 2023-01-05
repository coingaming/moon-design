import React, { useState } from 'react';
import { Alert, Button } from '@heathmont/moon-core-tw';

const Example = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => setIsVisible(!isVisible);
  if (isVisible)
    return (
      <Alert>
        Click the Close button to hide the Alert
        <Alert.Close onClick={handleClick} />
      </Alert>
    );
  return (
    <Button variant="secondary" onClick={handleClick}>
      Show Alert
    </Button>
  );
};

export default Example;
