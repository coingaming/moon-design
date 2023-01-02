import React from 'react';
import { Alert } from '@heathmont/moon-core-tw';
import { OtherFrame } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <Alert>
      <Alert.Message>
        <OtherFrame className="text-moon-24 text-roshi" />
        Generic style with coloured icon
      </Alert.Message>
      <Alert.Close />
    </Alert>
    <Alert className="bg-transparent outline outline-1 outline-offset-[-1px] outline-roshi">
      <Alert.Message className="text-roshi">
        <OtherFrame className="text-moon-24" />
        Outline style
      </Alert.Message>
      <Alert.Close />
    </Alert>
    <Alert className="bg-roshi-10">
      <Alert.Message className="text-roshi">
        <OtherFrame className="text-moon-24" />
        Colourful style
      </Alert.Message>
      <Alert.Close />
    </Alert>
  </>
);

export default Example;
