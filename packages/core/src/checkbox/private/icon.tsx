import React from 'react';
import {GenericCheckAlternative} from "@heathmont/moon-icons";

export const CheckboxIcon: React.FC<{ color: string | undefined }> = ({
  color,
}) => (
  <GenericCheckAlternative color={color} />
);
