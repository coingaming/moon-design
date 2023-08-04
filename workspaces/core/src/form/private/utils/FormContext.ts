import { createContext } from 'react';
import type FormState from '../types/FormState';

const FormContext = createContext<FormState>({});
FormContext.displayName = 'FormContext';

export default FormContext;
