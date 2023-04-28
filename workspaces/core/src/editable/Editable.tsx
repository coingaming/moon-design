import React, { useState } from 'react';
import { default as MoonInput, InputProps } from '../input/Input';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

type EditableRootProps = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

const EditableRoot: React.FC<EditableRootProps> = ({ children }) => {
  const [isEditing, setEditing] = useState(false);

  return <div>{children}</div>;
};

const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  return <MoonInput className={mergeClassnames(className)} {...rest} />;
};
const Editable = Object.assign(EditableRoot, { Input });

export default Editable;
